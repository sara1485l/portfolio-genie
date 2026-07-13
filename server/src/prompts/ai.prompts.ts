import type {
  AboutAI,
  SkillsAI,
  ProjectAI,
  ImproveAI,
  ResumeAI,
  CoverAI,
  ATSAI,
} from "../types/ai.types";

export const prompts = {
  about: (data: AboutAI) => `
You are a senior technical recruiter and software engineer.

Write a professional "About Me" section for a software developer portfolio.

Job Title:
${data.title}

Skills:
${data.skills.join(", ")}

Requirements:
- Write in first person.
- Sound confident and professional.
- Mention only the provided skills.
- Highlight technical strengths.
- Mention enthusiasm for learning and building software.
- Do NOT invent years of experience.
- Do NOT invent companies or projects.
- Keep the text ATS-friendly.
- Maximum 120 words.
- Return only the paragraph.
`,

  project: (data: ProjectAI) => `
You are a senior software engineer.

Write a professional portfolio project description.

Project Title:
${data.title}

Technologies:
${data.technologies.join(", ")}

Features:
${data.features.join(", ")}

Requirements:
- Explain the purpose of the project.
- Explain what problem it solves.
- Mention the technologies naturally.
- Highlight the most important features.
- Keep the description concise and professional.
- Do not invent features.
- Maximum 120 words.
- Return only the description.
`,

  improve: (data: ImproveAI) => `
You are an expert technical writer.

Improve the following text.

Text:
${data.text}

Requirements:
- Correct grammar and spelling.
- Improve vocabulary.
- Improve readability.
- Keep the original meaning.
- Make it professional.
- Do not make it unnecessarily longer.
- Return only the improved text.
`,

  skills: (data: SkillsAI) => `
You are a senior software engineer and technical interviewer.

Suggest technical skills for the following job role.

Job Title:
${data.title}

Requirements:
- Return exactly 15 skills.
- Include only skills related to this job title.
- Include programming languages if relevant.
- Include frameworks if relevant.
- Include databases if relevant.
- Include tools and platforms if relevant.
- Include version control if relevant.
- Do not include unrelated technologies.
- No explanations.
- No numbering.
- Return ONLY comma-separated skill names.

Example:
React, TypeScript, Redux, Bootstrap, HTML, CSS, JavaScript, REST API, Git, GitHub, npm, Vite, Responsive Design, Figma, Jest
`,

  resume: (data: ResumeAI) => `
You are an experienced HR recruiter.

Write an ATS-friendly professional resume summary.

Job Title:
${data.title}

Experience:
${data.experience}

Skills:
${data.skills.join(", ")}

Requirements:
- Professional tone.
- ATS friendly.
- Mention the strongest skills.
- Mention the career objective.
- If experience is empty, describe the candidate as an aspiring developer.
- Do NOT invent experience.
- Maximum 80 words.
- Return only the summary.
`,

  cover: (data: CoverAI) => `
You are an experienced HR manager.

Write a professional cover letter.

Company:
${data.company}

Job Position:
${data.title}

Skills:
${data.skills.join(", ")}

Requirements:
- Address the hiring manager professionally.
- Explain why the candidate is suitable.
- Mention the provided skills naturally.
- Show enthusiasm for the role.
- Do NOT invent experience.
- Professional tone.
- Maximum 250 words.
- Return only the cover letter.
`,

  ats: (data: ATSAI) => `
You are an ATS optimization expert.

Rewrite the following text to make it ATS-friendly.

Text:
${data.text}

Requirements:
- Improve readability.
- Use strong action verbs.
- Use professional language.
- Keep the original meaning.
- Remove unnecessary words.
- Make the text ATS compatible.
- Return only the rewritten text.
`,
};