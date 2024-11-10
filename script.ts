interface ResumeData {
  fullName: string;
  email: string;
  phone: string;
  summary: string;
  experience: string;
  education: string;
  skills: string;
}

const resumeForm = document.getElementById('resumeForm') as HTMLFormElement;
const resumePreview = document.getElementById('resumePreview') as HTMLElement;
const previewSection = document.getElementById('previewSection') as HTMLElement;

function updatePreview(data: ResumeData) {
  resumePreview.innerHTML = `
    <h3>${data.fullName}</h3>
    <p>Email: ${data.email} | Phone: ${data.phone}</p>
    <h4>Summary</h4>
    <p>${data.summary}</p>
    <h4>Experience</h4>
    <p>${data.experience}</p>
    <h4>Education</h4>
    <p>${data.education}</p>
    <h4>Skills</h4>
    <p>${data.skills}</p>
  `;
}

function handleSubmit(event: Event) {
  event.preventDefault(); // Prevent form from reloading the page

  const formData = new FormData(resumeForm);

  const data: ResumeData = {
    fullName: formData.get('fullName') as string,
    email: formData.get('email') as string,
    phone: formData.get('phone') as string,
    summary: formData.get('summary') as string,
    experience: formData.get('experience') as string,
    education: formData.get('education') as string,
    skills: formData.get('skills') as string,
  };

  updatePreview(data);

  previewSection.style.display = 'block'; // Show the preview section
}

// Attach event listener for form submission
resumeForm.addEventListener('submit', handleSubmit);
