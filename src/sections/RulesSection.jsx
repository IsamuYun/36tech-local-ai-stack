import React from 'react';

const rules = [
  {
    label: 'RULE 01',
    title: 'Each layer has a unique role.',
    description:
      "Don't try to make your runtime do RAG, or your model do retrieval. Sharp boundaries make every layer replaceable.",
  },
  {
    label: 'RULE 02',
    title: 'Each layer depends on the one below.',
    description:
      'Pick the bottom of the stack first — hardware sets the ceiling — because every layer above it inherits those constraints.',
  },
  {
    label: 'RULE 03',
    title: "Together they're a system.",
    description:
      'A great model on the wrong runtime feels slow. A weak model with great context feels smart. The system wins, not any one layer.',
  },
  {
    label: 'RULE 04',
    title: 'From energy to impact.',
    description:
      'Local AI runs on all five. Master one a quarter and in 15 months you own the full stack — no cloud bill required.',
  },
];

function RuleItem({ rule }) {
  return (
    <div className="item">
      <div className="k">{rule.label}</div>
      <h3>{rule.title}</h3>
      <p>{rule.description}</p>
    </div>
  );
}

export default function RulesSection() {
  return (
    <section className="deps">
      {rules.map((rule) => (
        <RuleItem key={rule.label} rule={rule} />
      ))}
    </section>
  );
}
