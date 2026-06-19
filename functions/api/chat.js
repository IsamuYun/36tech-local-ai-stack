const GEMINI_MODEL = 'gemini-2.5-flash';
const GEMINI_ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;
const MAX_QUESTION_LENGTH = 2000;

function jsonResponse(body, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
      ...extraHeaders,
    },
  });
}

function extractAnswer(payload) {
  const parts = payload?.candidates?.[0]?.content?.parts;
  if (!Array.isArray(parts)) return '';

  return parts
    .map((part) => (typeof part?.text === 'string' ? part.text : ''))
    .join('')
    .trim();
}

export async function onRequest(context) {
  const { request, env } = context;

  if (request.method !== 'POST') {
    return jsonResponse(
      { error: 'Method not allowed.' },
      405,
      { Allow: 'POST' },
    );
  }

  if (!env.GEMINI_API_KEY) {
    return jsonResponse({ error: 'Chat service is not configured.' }, 500);
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return jsonResponse({ error: 'Request body must be valid JSON.' }, 400);
  }

  const question = typeof body?.question === 'string' ? body.question.trim() : '';
  const language = body?.language === 'cn' ? 'Simplified Chinese' : 'English';

  if (!question) {
    return jsonResponse({ error: 'Question is required.' }, 400);
  }

  if (question.length > MAX_QUESTION_LENGTH) {
    return jsonResponse(
      { error: `Question must be ${MAX_QUESTION_LENGTH} characters or fewer.` },
      400,
    );
  }

  try {
    const geminiResponse = await fetch(GEMINI_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': env.GEMINI_API_KEY,
      },
      body: JSON.stringify({
        systemInstruction: {
          parts: [{
            text: `You are the 36 Tech Freedom website assistant. Answer in ${language}. Give practical, concise guidance about AI strategy, workflow automation, knowledge bases, data analytics, local AI, and responsible implementation. Use plain language, avoid hype, and keep the answer under 250 words. If a question is outside this scope, answer briefly and steer the user toward a relevant business or AI implementation question.`,
          }],
        },
        contents: [{
          role: 'user',
          parts: [{ text: question }],
        }],
        generationConfig: {
          temperature: 0.4,
          maxOutputTokens: 600,
        },
      }),
    });

    if (!geminiResponse.ok) {
      console.error('Gemini API request failed', geminiResponse.status);
      return jsonResponse({ error: 'The AI service is temporarily unavailable.' }, 502);
    }

    const payload = await geminiResponse.json();
    const answer = extractAnswer(payload);

    if (!answer) {
      return jsonResponse({ error: 'The AI service returned an empty response.' }, 502);
    }

    return jsonResponse({ answer });
  } catch (error) {
    console.error('Gemini API request error', error instanceof Error ? error.message : error);
    return jsonResponse({ error: 'The AI service is temporarily unavailable.' }, 502);
  }
}
