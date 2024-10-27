// Wait for the DOM to be fully loaded before executing any code
document.addEventListener('DOMContentLoaded', function () {
    getData();

    // Add an event listener for closing the modal
    document.getElementById('closeModal').addEventListener('click', closeModal);
});

// Function to fetch data from the specified API endpoint
async function getData() {
    try {
        const response = await fetch('https://opensheet.elk.sh/1amftbev5u_N-wtlQnpHvuiQgQ3azCb2KbAACgrsSGz8/Sheet1');
        const data = await response.json();
        displayCards(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Function to display job cards on the webpage
function displayCards(data) {
    const cardContainer = document.getElementById('jobCards');
    cardContainer.innerHTML = ''; // Clear any existing cards

    data.forEach((row) => {
        const card = document.createElement('div');
        const interestClass = row.interests.toLowerCase().replace(/ /g, '-');
        card.className = `job ${interestClass}`;

        const jobTitle = document.createElement('h1');
        const interests = document.createElement('p');
        const jobImage = document.createElement('img');
        // const jobVideo = document.createElement('iframe');
        
        jobTitle.innerText = row.career;
        interests.innerText = row.interests;
        jobImage.src = row.image;
        jobImage.alt = `Image for ${row.career}`;
        // jobVideo.src = row.video;
        card.append(jobTitle, interests, jobImage);
        cardContainer.appendChild(card);

        // Add event listener to display job in modal on click
        card.addEventListener('click', () => {
            displayJobModal(row);
        });
    });
}

// Function to display selected job information in a modal
function displayJobModal(jobData) {
    // Populate modal with job data
    document.getElementById('modalJobTitle').innerText = jobData.career;
    document.getElementById('modalInterests').innerText = `Interests: ${jobData.interests}`;
    document.getElementById('modalDescription').innerText = jobData.description;

    // document.getElementById('modalJobVideo').src = jobData.video;
    // document.getElementById('modalJobVideo').alt = `Video for ${jobData.career}`;
    // console.log(jobData.video);

    // Display the modal
    document.getElementById('jobModal').style.display = 'flex';
}

// Function to close the modal
function closeModal() {
    document.getElementById('jobModal').style.display = 'none';
}

// Function to filter jobs based on the selected interest
function filterSelection(interest) {
    const cards = document.querySelectorAll('.job');
    cards.forEach((card) => {
        if (interest === 'job' || card.classList.contains(interest)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function selectButton(button) {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => btn.classList.remove('selected'));
    button.classList.add('selected');
}




    
//     {
//         interest: "Health and Medicine",
//         relatedCareers: [
//             "Doctor",
//             "Nurse",
//             "Pharmacist",
//             "Medical Technician",
//             "Physical Therapist",
//             "Dentist"
//         ],
//         skills: [
//             "Empathy",
//             "Attention to detail",
//             "Patient care",
//             "Medical knowledge",
//             "Diagnostic skills"
//         ]
//     },
//     {
//         interest: "Business and Management",
//         relatedCareers: [
//             "Business Analyst",
//             "Project Manager",
//             "Marketing Manager",
//             "Sales Executive",
//             "Human Resources Specialist"
//         ],
//         skills: [
//             "Strategic planning",
//             "Communication",
//             "Leadership",
//             "Organizational skills",
//             "Analytical skills"
//         ]
//     },
//     {
//         interest: "Writing and Communication",
//         relatedCareers: [
//             "Journalist",
//             "Copywriter",
//             "Editor",
//             "Public Relations Specialist",
//             "Content Creator"
//         ],
//         skills: [
//             "Creativity",
//             "Written communication",
//             "Research",
//             "Storytelling",
//             "Editing"
//         ]
//     },
//     {
//         interest: "Education and Training",
//         relatedCareers: [
//             "Teacher",
//             "Corporate Trainer",
//             "Education Consultant",
//             "Academic Advisor",
//             "Curriculum Developer"
//         ],
//         skills: [
//             "Communication",
//             "Instructional skills",
//             "Patience",
//             "Adaptability",
//             "Empathy"
//         ]
//     },
//     {
//         interest: "Finance and Accounting",
//         relatedCareers: [
//             "Accountant",
//             "Financial Analyst",
//             "Investment Banker",
//             "Auditor",
//             "Financial Planner"
//         ],
//         skills: [
//             "Analytical thinking",
//             "Attention to detail",
//             "Mathematical skills",
//             "Financial knowledge"
//         ]
//     },
//     {
//         interest: "Public Service and Law",
//         relatedCareers: [
//             "Lawyer",
//             "Police Officer",
//             "Social Worker",
//             "Judge",
//             "Policy Analyst"
//         ],
//         skills: [
//             "Critical thinking",
//             "Negotiation",
//             "Public speaking",
//             "Understanding laws and regulations"
//         ]
//     },
//     {
//         interest: "Engineering and Architecture",
//         relatedCareers: [
//             "Civil Engineer",
//             "Mechanical Engineer",
//             "Architect",
//             "Structural Engineer",
//             "Electrical Engineer"
//         ],
//         skills: [
//             "Mathematical knowledge",
//             "Technical skills",
//             "Problem-solving",
//             "Project management",
//             "Creativity"
//         ]
//     },
//     {
//         interest: "Environment and Agriculture",
//         relatedCareers: [
//             "Environmental Scientist",
//             "Agricultural Scientist",
//             "Conservationist",
//             "Horticulturist",
//             "Ecologist"
//         ],
//         skills: [
//             "Environmental knowledge",
//             "Scientific research",
//             "Physical stamina",
//             "Data analysis"
//         ]
//     },
//     {
//         interest: "Hospitality and Culinary Arts",
//         relatedCareers: [
//             "Chef",
//             "Restaurant Manager",
//             "Event Planner",
//             "Hotel Manager",
//             "Food and Beverage Director"
//         ],
//         skills: [
//             "Customer service",
//             "Creativity",
//             "Multitasking",
//             "Attention to detail",
//             "Communication"
//         ]
//     },
//     {
//         interest: "Media and Entertainment",
//         relatedCareers: [
//             "Actor",
//             "Musician",
//             "Film Director",
//             "Producer",
//             "Sound Engineer",
//             "Photographer"
//         ],
//         skills: [
//             "Creativity",
//             "Storytelling",
//             "Public speaking",
//             "Attention to detail",
//             "Media production knowledge"
//         ]
//     },
//     {
//         interest: "Sales and Marketing",
//         relatedCareers: [
//             "Marketing Specialist",
//             "Sales Representative",
//             "Brand Manager",
//             "Digital Marketer",
//             "SEO Specialist"
//         ],
//         skills: [
//             "Persuasion",
//             "Analytical thinking",
//             "Digital skills",
//             "Communication",
//             "Customer insight"
//         ]
//     },
//     {
//         interest: "Trades and Skilled Labor",
//         relatedCareers: [
//             "Electrician",
//             "Plumber",
//             "Carpenter",
//             "Automotive Technician",
//             "Welder"
//         ],
//         skills: [
//             "Manual dexterity",
//             "Technical knowledge",
//             "Troubleshooting",
//             "Physical stamina",
//             "Safety consciousness"
//         ]
//     },
//     {
//         interest: "Sports and Physical Fitness",
//         relatedCareers: [
//             "Personal Trainer",
//             "Coach",
//             "Physical Therapist",
//             "Sports Agent",
//             "Athlete"
//         ],
//         skills: [
//             "Physical endurance",
//             "Motivational skills",
//             "Knowledge of sports science",
//             "Communication",
//             "Patience"
//         ]
//     },
//     {
//         interest: "Social and Community Services",
//         relatedCareers: [
//             "Social Worker",
//             "Counselor",
//             "Community Organizer",
//             "Nonprofit Manager",
//             "Volunteer Coordinator"
//         ],
//         skills: [
//             "Empathy",
//             "Active listening",
//             "Problem-solving",
//             "Organizational skills",
//             "Cultural sensitivity"
//         ]
//     }
// ];
