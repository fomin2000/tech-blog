const createPostBtn = document.getElementById('createPostBtn')
const titleInput = document.getElementById('titleInput')
const bodyInput = document.getElementById('bodyInput')

const newFormHandler = async (event) => {
    event.preventDefault();
  
    const title = titleInput.value.trim();
    const body = bodyInput.value.trim();
  
    await fetch('/api/post', {
      method: 'POST',
      body: JSON.stringify({
        title,
        body,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    document.location.replace('/dashboard');
};
  

createPostBtn.addEventListener('submit', newFormHandler);