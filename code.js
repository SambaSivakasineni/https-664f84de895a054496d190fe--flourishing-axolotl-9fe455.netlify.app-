document.addEventListener('DOMContentLoaded', () => {
    const jobForm = document.getElementById('job-form');
    const jobListings = document.getElementById('job-listings');

    // Function to render a job listing
    const renderJobListing = (job) => {
        const jobDiv = document.createElement('div');
        jobDiv.classList.add('job-listing');

        jobDiv.innerHTML = `
            <h3>${job.title}</h3>
            <p><strong>Company:</strong> ${job.company}</p>
            <p><strong>Description:</strong> ${job.description}</p>
            <p><strong>Location:</strong> ${job.location}</p>
        `;

        jobListings.appendChild(jobDiv);
    };

    // Handle form submission
    jobForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const job = {
            title: jobForm.title.value,
            company: jobForm.company.value,
            description: jobForm.description.value,
            location: jobForm.location.value,
        };

        renderJobListing(job);

        jobForm.reset();
    });
});
