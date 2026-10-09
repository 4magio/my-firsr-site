const form = document.getElementById('message-form');
const input = document.getElementById('text-input');
const output = document.getElementById('response');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  output.className = '';
  try {
    const res = await fetch('/api/message', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: input.value }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Request failed');
    output.textContent = data.reply;
  } catch (err) {
    output.className = 'error';
    output.textContent = err.message;
  }
});
