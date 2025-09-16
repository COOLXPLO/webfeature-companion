const root = document.getElementById('root');

const features = [
  { name: 'fetch API', status: 'Supported', support: '95%' },
  { name: 'CSS backdrop-filter', status: 'Partial', support: '75%' },
  { name: 'ES6 Modules', status: 'Supported', support: '99%' }
];

const tableRows = features.map(
  f => `<tr>
          <td>${f.name}</td>
          <td>${f.status}</td>
          <td>${f.support}</td>
        </tr>`
).join('');

root.innerHTML = `
  <h1>WebFeature Companion Dashboard</h1>
  <table border="1" cellpadding="10">
    <thead>
      <tr>
        <th>Feature</th>
        <th>Status</th>
        <th>Browser Support</th>
      </tr>
    </thead>
    <tbody>
      ${tableRows}
    </tbody>
  </table>
`;
