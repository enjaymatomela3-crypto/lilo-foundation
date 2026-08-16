const skills = [
  ['customer success', 'Customer success / relationship management'],
  ['customer support', 'Customer support'],
  ['communication', 'Communication'],
  ['crm', 'CRM'],
  ['salesforce', 'Salesforce'],
  ['zendesk', 'Zendesk'],
  ['remote', 'Remote work'],
  ['writing', 'Writing'],
  ['research', 'Research'],
  ['ai', 'AI'],
  ['automation', 'Automation'],
  ['project management', 'Project management']
];

function analyse() {
  const text = document.getElementById('job').value.toLowerCase();
  if (!text.trim()) return;
  const matches = skills.filter(([key]) => text.includes(key));
  const score = Math.min(100, Math.round((matches.length / 8) * 100));
  const found = matches.map(([,label]) => `<li>${label}</li>`).join('') || '<li>No predefined matches found — review manually.</li>';
  document.getElementById('result').innerHTML = `
    <div class="card">
      <div class="score">${score}%</div>
      <p><strong>Prototype fit indicator</strong></p>
      <p>This is a transparent keyword-based learning demo, not a hiring prediction.</p>
      <h3>Signals detected</h3><ul>${found}</ul>
      <h3>Human review</h3>
      <p>Check the original job description, verify every qualification, and decide whether the role is genuinely suitable before applying.</p>
    </div>`;
}
