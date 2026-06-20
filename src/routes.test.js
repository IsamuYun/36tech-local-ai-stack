import test from 'node:test';
import assert from 'node:assert/strict';

import { buildLocalizedPath, getRouteState } from './routes.js';

test('AI Trainer navigation uses the extensionless canonical URL', () => {
  assert.equal(buildLocalizedPath('ai-trainer', 'en'), '/en/works/ai-trainer');
  assert.equal(buildLocalizedPath('ai-trainer', 'cn'), '/cn/works/ai-trainer');
});

test('extensionless AI Trainer URLs resolve to the case-study page', () => {
  assert.deepEqual(getRouteState('/en/works/ai-trainer'), {
    language: 'en',
    page: 'ai-trainer',
    pagePath: '/works/ai-trainer',
  });
  assert.deepEqual(getRouteState('/cn/works/ai-trainer'), {
    language: 'cn',
    page: 'ai-trainer',
    pagePath: '/works/ai-trainer',
  });
});

test('legacy .html AI Trainer URLs remain supported', () => {
  assert.equal(getRouteState('/en/works/ai-trainer.html').page, 'ai-trainer');
  assert.equal(getRouteState('/cn/works/ai-trainer.html').page, 'ai-trainer');
});

test('other case-study routes use the same canonical URL behavior', () => {
  assert.equal(
    buildLocalizedPath('hikvision-aem-migration', 'en'),
    '/en/works/hikvision-aem-migration',
  );
  assert.equal(
    getRouteState('/en/works/hikvision-aem-migration.html').page,
    'hikvision-aem-migration',
  );
});
