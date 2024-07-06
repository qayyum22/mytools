// import React, { useState } from 'react';

// const ResumeGenerator = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     contact: '',
//     email: '',
//     experience: '',
//     projects: '',
//     skills: '',
//     education: ''
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const generateResume = () => {
//     const resumeWindow = window.open('', '_blank');
//     resumeWindow.document.write(`
//       <html>
//         <head>
//           <title>${formData.name} - Resume</title>
//           <style>
//             body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
//             .container { width: 80%; margin: 0 auto; }
//             h1 { color: #2c3e50; }
//             h2 { color: #34495e; border-bottom: 1px solid #ecf0f1; padding-bottom: 10px; }
//             .contact-info { margin-bottom: 20px; }
//             @media print {
//               .no-print { display: none; }
//             }
//           </style>
//         </head>
//         <body>
//           <div class="container">
//             <h1>${formData.name}</h1>
//             <div class="contact-info">
//               <p>${formData.contact} | ${formData.email}</p>
//             </div>
//             <h2>Experience</h2>
//             <p>${formData.experience.replace(/\n/g, '<br>')}</p>
//             <h2>Projects</h2>
//             <p>${formData.projects.replace(/\n/g, '<br>')}</p>
//             <h2>Skills</h2>
//             <p>${formData.skills.replace(/\n/g, '<br>')}</p>
//             <h2>Education</h2>
//             <p>${formData.education.replace(/\n/g, '<br>')}</p>
//           </div>
//           <div class="no-print">
//             <button onclick="window.print()">Print or Save as PDF</button>
//           </div>
//         </body>
//       </html>
//     `);
//     resumeWindow.document.close();
//   };

//   return (
//     <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
//       <h1 style={{ textAlign: 'center' }}>Resume Generator</h1>
//       <form>
//         <div style={{ marginBottom: '15px' }}>
//           <label htmlFor="name">Full Name:</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleInputChange}
//             style={{ width: '100%', padding: '8px' }}
//           />
//         </div>
//         <div style={{ marginBottom: '15px' }}>
//           <label htmlFor="contact">Contact:</label>
//           <input
//             type="text"
//             id="contact"
//             name="contact"
//             value={formData.contact}
//             onChange={handleInputChange}
//             style={{ width: '100%', padding: '8px' }}
//           />
//         </div>
//         <div style={{ marginBottom: '15px' }}>
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//             style={{ width: '100%', padding: '8px' }}
//           />
//         </div>
//         <div style={{ marginBottom: '15px' }}>
//           <label htmlFor="experience">Experience:</label>
//           <textarea
//             id="experience"
//             name="experience"
//             value={formData.experience}
//             onChange={handleInputChange}
//             style={{ width: '100%', padding: '8px', height: '100px' }}
//           />
//         </div>
//         <div style={{ marginBottom: '15px' }}>
//           <label htmlFor="projects">Projects:</label>
//           <textarea
//             id="projects"
//             name="projects"
//             value={formData.projects}
//             onChange={handleInputChange}
//             style={{ width: '100%', padding: '8px', height: '100px' }}
//           />
//         </div>
//         <div style={{ marginBottom: '15px' }}>
//           <label htmlFor="skills">Skills:</label>
//           <textarea
//             id="skills"
//             name="skills"
//             value={formData.skills}
//             onChange={handleInputChange}
//             style={{ width: '100%', padding: '8px', height: '100px' }}
//           />
//         </div>
//         <div style={{ marginBottom: '15px' }}>
//           <label htmlFor="education">Education:</label>
//           <textarea
//             id="education"
//             name="education"
//             value={formData.education}
//             onChange={handleInputChange}
//             style={{ width: '100%', padding: '8px', height: '100px' }}
//           />
//         </div>
//         <button
//           type="button"
//           onClick={generateResume}
//           style={{
//             backgroundColor: '#4CAF50',
//             border: 'none',
//             color: 'white',
//             padding: '15px 32px',
//             textAlign: 'center',
//             textDecoration: 'none',
//             display: 'inline-block',
//             fontSize: '16px',
//             margin: '4px 2px',
//             cursor: 'pointer'
//           }}
//         >
//           Generate Resume
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ResumeGenerator;



// import React, { useState, useEffect } from 'react';

// const designs = {
//     classic: {
//         name: 'Classic',
//         styles: `
//       body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
//       .container { width: 100%; padding: 20px; }
//       h1 { color: #2c3e50; }
//       h2 { color: #34495e; border-bottom: 1px solid #ecf0f1; padding-bottom: 10px; }
//       .contact-info { margin-bottom: 20px; }
//     `
//     },
//     modern: {
//         name: 'Modern',
//         styles: `
//       body { font-family: 'Helvetica', sans-serif; line-height: 1.6; color: #333; background-color: #f4f4f4; }
//       .container { width: 100%; padding: 40px; background-color: white; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
//       h1 { color: #3498db; text-transform: uppercase; letter-spacing: 2px; }
//       h2 { color: #2980b9; border-left: 4px solid #3498db; padding-left: 10px; }
//       .contact-info { background-color: #3498db; color: white; padding: 10px; margin-bottom: 20px; }
//     `
//     },
//     minimalist: {
//         name: 'Minimalist',
//         styles: `
//       body { font-family: 'Georgia', serif; line-height: 1.8; color: #2c3e50; }
//       .container { width: 100%; padding: 20px; max-width: 800px; margin: 0 auto; }
//       h1 { color: #2c3e50; font-weight: normal; border-bottom: 2px solid #2c3e50; padding-bottom: 10px; }
//       h2 { color: #34495e; font-weight: normal; text-transform: uppercase; letter-spacing: 1px; }
//       .contact-info { font-style: italic; margin-bottom: 20px; }
//     `
//     }
// };

// const ResumeGenerator = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         contact: '',
//         email: '',
//         experience: '',
//         projects: '',
//         skills: '',
//         education: ''
//     });
//     const [selectedDesign, setSelectedDesign] = useState('classic');

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };

//     const generateResume = () => {
//         const resumeWindow = window.open('', '_blank');
//         resumeWindow.document.write(`
//       <html>
//         <head>
//           <title>${formData.name} - Resume</title>
//           <style>${designs[selectedDesign].styles}</style>
//         </head>
//         <body>
//           <div class="container">
//             <h1>${formData.name}</h1>
//             <div class="contact-info">
//               <p>${formData.contact} | ${formData.email}</p>
//             </div>
//             <h2>Experience</h2>
//             <p>${formData.experience.replace(/\n/g, '<br>')}</p>
//             <h2>Projects</h2>
//             <p>${formData.projects.replace(/\n/g, '<br>')}</p>
//             <h2>Skills</h2>
//             <p>${formData.skills.replace(/\n/g, '<br>')}</p>
//             <h2>Education</h2>
//             <p>${formData.education.replace(/\n/g, '<br>')}</p>
//           </div>
//           <script>window.print();</script>
//         </body>
//       </html>
//     `);
//         resumeWindow.document.close();
//     };

//     return (
//         <div style={{ display: 'flex', maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
//             <div style={{ flex: 1, marginRight: '20px' }}>
//                 <h1 style={{ textAlign: 'center' }}>Resume Generator</h1>
//                 <form>
//                     <div style={{ marginBottom: '15px' }}>
//                         <label htmlFor="design">Select Design:</label>
//                         <select
//                             id="design"
//                             value={selectedDesign}
//                             onChange={(e) => setSelectedDesign(e.target.value)}
//                             style={{ width: '100%', padding: '8px' }}
//                         >
//                             {Object.entries(designs).map(([key, value]) => (
//                                 <option key={key} value={key}>{value.name}</option>
//                             ))}
//                         </select>
//                     </div>
//                     {Object.entries(formData).map(([key, value]) => (
//                         <div key={key} style={{ marginBottom: '15px' }}>
//                             <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}:</label>
//                             {key === 'experience' || key === 'projects' || key === 'skills' || key === 'education' ? (
//                                 <textarea
//                                     id={key}
//                                     name={key}
//                                     value={value}
//                                     onChange={handleInputChange}
//                                     style={{ width: '100%', padding: '8px', height: '100px' }}
//                                 />
//                             ) : (
//                                 <input
//                                     type={key === 'email' ? 'email' : 'text'}
//                                     id={key}
//                                     name={key}
//                                     value={value}
//                                     onChange={handleInputChange}
//                                     style={{ width: '100%', padding: '8px' }}
//                                 />
//                             )}
//                         </div>
//                     ))}
//                     <button
//                         type="button"
//                         onClick={generateResume}
//                         style={{
//                             backgroundColor: '#4CAF50',
//                             border: 'none',
//                             color: 'white',
//                             padding: '15px 32px',
//                             textAlign: 'center',
//                             textDecoration: 'none',
//                             display: 'inline-block',
//                             fontSize: '16px',
//                             margin: '4px 2px',
//                             cursor: 'pointer'
//                         }}
//                     >
//                         Generate Resume
//                     </button>
//                 </form>
//             </div>
//             <div style={{ flex: 1 }}>
//                 <h2>Preview</h2>
//                 <div
//                     style={{
//                         border: '1px solid #ccc',
//                         padding: '20px',
//                         height: '800px',
//                         overflow: 'auto'
//                     }}
//                 >
//                     <style>{designs[selectedDesign].styles}</style>
//                     <div className="container">
//                         <h1>{formData.name || 'Your Name'}</h1>
//                         <div className="contact-info">
//                             <p>{formData.contact || 'Your Contact'} | {formData.email || 'Your Email'}</p>
//                         </div>
//                         <h2>Experience</h2>
//                         <p>{formData.experience.replace(/\n/g, '<br>') || 'Your experience here'}</p>
//                         <h2>Projects</h2>
//                         <p>{formData.projects.replace(/\n/g, '<br>') || 'Your projects here'}</p>
//                         <h2>Skills</h2>
//                         <p>{formData.skills.replace(/\n/g, '<br>') || 'Your skills here'}</p>
//                         <h2>Education</h2>
//                         <p>{formData.education.replace(/\n/g, '<br>') || 'Your education here'}</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ResumeGenerator;



import React, { useState } from 'react';

const designs = {
    classic: {
        name: 'Classic',
        styles: `
      body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
      .container { width: 100%; padding: 20px; }
      h1 { color: #2c3e50; }
      h2 { color: #34495e; border-bottom: 1px solid #ecf0f1; padding-bottom: 10px; }
      .contact-info { margin-bottom: 20px; }
    `
    },
    modern: {
        name: 'Modern',
        styles: `
      body { font-family: 'Helvetica', sans-serif; line-height: 1.6; color: #333; background-color: #f4f4f4; }
      .container { width: 100%; padding: 40px; background-color: white; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
      h1 { color: #3498db; text-transform: uppercase; letter-spacing: 2px; }
      h2 { color: #2980b9; border-left: 4px solid #3498db; padding-left: 10px; }
      .contact-info { background-color: #3498db; color: white; padding: 10px; margin-bottom: 20px; }
    `
    },
    modernProfessional: {
        name: 'Modern Professional',
        styles: `
      body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; background-color: #f4f4f4; }
      .container { width: 100%; max-width: 800px; margin: 0 auto; background-color: white; }
      .header { background-color: #34495e; color: white; padding: 20px; display: flex; align-items: center; }
      .profile-pic { width: 100px; height: 100px; border-radius: 50%; margin-right: 20px; }
      .name-title { flex-grow: 1; }
      h1 { margin: 0; font-size: 24px; }
      .job-title { font-size: 18px; opacity: 0.8; }
      .contact-info { background-color: #ecf0f1; padding: 10px 20px; display: flex; justify-content: space-between; }
      .main-content { padding: 20px; }
      h2 { color: #34495e; border-bottom: 2px solid #34495e; padding-bottom: 5px; }
      .section { margin-bottom: 20px; }
      .skills-list, .languages-list { display: flex; flex-wrap: wrap; }
      .skill-item, .language-item { background-color: #ecf0f1; padding: 5px 10px; margin: 5px; border-radius: 5px; }
      .timeline-item { margin-bottom: 15px; }
      .timeline-header { display: flex; justify-content: space-between; font-weight: bold; }
    `
    }
};

const ResumeGenerator = () => {
    const [formData, setFormData] = useState({
        name: '',
        jobTitle: '',
        profileSummary: '',
        contact: '',
        email: '',
        location: '',
        experience: '',
        skills: '',
        languages: '',
        education: '',
        projects: '',
        hobbies: ''
    });
    const [selectedDesign, setSelectedDesign] = useState('modernProfessional');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const generateResume = () => {
        const resumeWindow = window.open('', '_blank');
        resumeWindow.document.write(`
      <html>
        <head>
          <title>${formData.name} - Resume</title>
          <style>${designs[selectedDesign].styles}</style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <img src="/api/placeholder/100/100" alt="Profile" class="profile-pic" />
              <div class="name-title">
                <h1>${formData.name}</h1>
                <div class="job-title">${formData.jobTitle}</div>
              </div>
            </div>
            <div class="contact-info">
              <span>${formData.email}</span>
              <span>${formData.contact}</span>
              <span>${formData.location}</span>
            </div>
            <div class="main-content">
              <div class="section">
                <h2>Profile Summary</h2>
                <p>${formData.profileSummary}</p>
              </div>
              <div class="section">
                <h2>Work Experience</h2>
                ${formData.experience.split('\n').map(exp => `
                  <div class="timeline-item">
                    <div class="timeline-header">
                      <span>${exp.split('|')[0]}</span>
                      <span>${exp.split('|')[1]}</span>
                    </div>
                    <p>${exp.split('|')[2]}</p>
                  </div>
                `).join('')}
              </div>
              <div class="section">
                <h2>Skills</h2>
                <div class="skills-list">
                  ${formData.skills.split(',').map(skill => `<span class="skill-item">${skill.trim()}</span>`).join('')}
                </div>
              </div>
              <div class="section">
                <h2>Languages</h2>
                <div class="languages-list">
                  ${formData.languages.split(',').map(lang => `<span class="language-item">${lang.trim()}</span>`).join('')}
                </div>
              </div>
              <div class="section">
                <h2>Education</h2>
                ${formData.education.split('\n').map(edu => `
                  <div class="timeline-item">
                    <div class="timeline-header">
                      <span>${edu.split('|')[0]}</span>
                      <span>${edu.split('|')[1]}</span>
                    </div>
                    <p>${edu.split('|')[2]}</p>
                  </div>
                `).join('')}
              </div>
              <div class="section">
                <h2>Projects</h2>
                <p>${formData.projects}</p>
              </div>
              <div class="section">
                <h2>Hobbies</h2>
                <p>${formData.hobbies}</p>
              </div>
            </div>
          </div>
          <script>window.print();</script>
        </body>
      </html>
    `);
        resumeWindow.document.close();
    };

    return (
        <div style={{ display: 'flex', maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
            <div style={{ flex: 1, marginRight: '20px' }}>
                <h1 style={{ textAlign: 'center' }}>Resume Generator</h1>
                <form>
                    <div style={{ marginBottom: '15px' }}>
                        <label htmlFor="design">Select Design:</label>
                        <select
                            id="design"
                            value={selectedDesign}
                            onChange={(e) => setSelectedDesign(e.target.value)}
                            style={{ width: '100%', padding: '8px' }}
                        >
                            {Object.entries(designs).map(([key, value]) => (
                                <option key={key} value={key}>{value.name}</option>
                            ))}
                        </select>
                    </div>
                    {Object.entries(formData).map(([key, value]) => (
                        <div key={key} style={{ marginBottom: '15px' }}>
                            <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}:</label>
                            {key === 'experience' || key === 'education' || key === 'profileSummary' ? (
                                <textarea
                                    id={key}
                                    name={key}
                                    value={value}
                                    onChange={handleInputChange}
                                    style={{ width: '100%', padding: '8px', height: '100px' }}
                                    placeholder={key === 'experience' || key === 'education' ? "Company|Year|Description" : ""}
                                />
                            ) : (
                                <input
                                    type={key === 'email' ? 'email' : 'text'}
                                    id={key}
                                    name={key}
                                    value={value}
                                    onChange={handleInputChange}
                                    style={{ width: '100%', padding: '8px' }}
                                />
                            )}
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={generateResume}
                        style={{
                            backgroundColor: '#4CAF50',
                            border: 'none',
                            color: 'white',
                            padding: '15px 32px',
                            textAlign: 'center',
                            textDecoration: 'none',
                            display: 'inline-block',
                            fontSize: '16px',
                            margin: '4px 2px',
                            cursor: 'pointer'
                        }}
                    >
                        Generate Resume
                    </button>
                </form>
            </div>
            <div style={{ flex: 1 }}>
                <h2>Preview</h2>
                <div
                    style={{
                        border: '1px solid #ccc',
                        padding: '20px',
                        height: '800px',
                        overflow: 'auto'
                    }}
                >
                    <style>{designs[selectedDesign].styles}</style>
                    <div className="container">
                        <div className="header">
                            <img src="/api/placeholder/100/100" alt="Profile" className="profile-pic" />
                            <div className="name-title">
                                <h1>{formData.name || 'Your Name'}</h1>
                                <div className="job-title">{formData.jobTitle || 'Your Job Title'}</div>
                            </div>
                        </div>
                        <div className="contact-info">
                            <span>{formData.email || 'your.email@example.com'}</span>
                            <span>{formData.contact || '+1234567890'}</span>
                            <span>{formData.location || 'City, Country'}</span>
                        </div>
                        <div className="main-content">
                            <div className="section">
                                <h2>Profile Summary</h2>
                                <p>{formData.profileSummary || 'Your professional summary goes here.'}</p>
                            </div>
                            <div className="section">
                                <h2>Work Experience</h2>
                                {formData.experience ? formData.experience.split('\n').map((exp, index) => (
                                    <div key={index} className="timeline-item">
                                        <div className="timeline-header">
                                            <span>{exp.split('|')[0]}</span>
                                            <span>{exp.split('|')[1]}</span>
                                        </div>
                                        <p>{exp.split('|')[2]}</p>
                                    </div>
                                )) : <p>Your work experience goes here.</p>}
                            </div>
                            <div className="section">
                                <h2>Skills</h2>
                                <div className="skills-list">
                                    {formData.skills ? formData.skills.split(',').map((skill, index) => (
                                        <span key={index} className="skill-item">{skill.trim()}</span>
                                    )) : <span className="skill-item">Your skills</span>}
                                </div>
                            </div>
                            <div className="section">
                                <h2>Languages</h2>
                                <div className="languages-list">
                                    {formData.languages ? formData.languages.split(',').map((lang, index) => (
                                        <span key={index} className="language-item">{lang.trim()}</span>
                                    )) : <span className="language-item">Your languages</span>}
                                </div>
                            </div>
                            <div className="section">
                                <h2>Education</h2>
                                {formData.education ? formData.education.split('\n').map((edu, index) => (
                                    <div key={index} className="timeline-item">
                                        <div className="timeline-header">
                                            <span>{edu.split('|')[0]}</span>
                                            <span>{edu.split('|')[1]}</span>
                                        </div>
                                        <p>{edu.split('|')[2]}</p>
                                    </div>
                                )) : <p>Your education details go here.</p>}
                            </div>
                            <div className="section">
                                <h2>Projects</h2>
                                <p>{formData.projects || 'Your projects go here.'}</p>
                            </div>
                            <div className="section">
                                <h2>Hobbies</h2>
                                <p>{formData.hobbies || 'Your hobbies go here.'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResumeGenerator;