export const content = {
    metadata: {
        siteTitle: "GIFT Moral Nexus",
        siteHandle: "@GIFTUNIV",
        contact: {
            location: "GF-04, Society of Islamic Thought & Culture (SITC), GIFT University",
            phone: "+92 (55) 111 900 100",
            altPhone: "+92 (55) 3416900-3",
            fax: "+92 (55) 3892986",
            web: "www.gift.edu.pk",
        },
        socials: {
            facebook: "https://www.facebook.com/GIFTUniv",
            instagram: "https://www.instagram.com/giftuniv",
            youtube: "https://www.youtube.com/@GIFTUniv",
            linkedin: "https://www.linkedin.com/school/giftuniv",
            twitter: "https://x.com/GIFTUniv",
            tiktok: "https://www.tiktok.com/@giftuniv",
            whatsapp: "https://wa.me/giftuniv",
        }
    },
    home: {
        title: "GIFT Moral Nexus",
        welcome: "Welcome to GIFT Moral Nexus. Explore the Truthfulness module with readings, activities, pledges, and audio in Urdu and English. Use the cards below to dive into each experience.",
        cards: [
            { id: 'truthfulness', title: 'Truthfulness', desc: 'Core concept, benefits, consequences', path: '/truthfulness' },
            { id: 'quran', title: "Qur'an on Truthfulness", desc: 'Verses & reflections', path: '/quran' },
            { id: 'sunnah', title: 'Sunnah on Truthfulness', desc: 'Prophetic guidance', path: '/sunnah' },
            { id: 'questions', title: 'Reflective Questions', desc: 'Think deeply', path: '/questions' },
            { id: 'dilemmas', title: 'Truthfulness Dilemmas', desc: 'Scenario practice', path: '/dilemmas' },
            { id: 'mirror', title: 'Mirror Moments', desc: 'Personal reflection', path: '/mirror-moments' },
            { id: 'roleplay', title: 'Role Play', desc: 'Interactive learning', path: '/roleplay' },
            { id: 'pledge', title: 'Truthfulness Pledge', desc: 'Commitment & reflection', path: '/pledge' },
            { id: 'razehayat', title: 'Raz-e-Hayat', desc: 'The secret to a fulfilling life based on timeless principles.', path: '/razehayat' },
        ]
    },
    truthfulness: {
        title: "Truthfulness",
        intro: "Truthfulness is one of the greatest virtues that defines a person’s character. It means being honest in our words, actions, and thoughts. A truthful person speaks the truth, stands by it even when it is difficult, and avoids deceit in all forms. Truthfulness builds trust, strengthens relationships, and forms the foundation of a good and peaceful society.",
        body: "Truthfulness is not just about speaking the truth; it is about living truthfully. It involves sincerity, fairness, and integrity in every aspect of life. A truthful person does not hide facts, cheat, or mislead others. In personal life, truthfulness brings inner peace and self-respect. In social life, it earns respect, confidence, and love from others. A truthful society is one where justice and harmony prevail.",
        benefits: {
            title: "Benefits of being Truthful",
            text: "Truthfulness leads to trust and credibility. When people know that we speak the truth, they are more likely to believe and depend on us. It saves us from fear and guilt because a truthful person has nothing to hide. Truth is the foundation of wisdom, and in the long run, truth always triumphs over falsehood. — as the saying goes, “Truth alone triumphs”.",
        },
        consequences: {
            title: "Consequences of Dishonesty",
            text: "Falsehood may give temporary benefits, but it ultimately leads to loss of trust, guilt, and shame. A liar is always afraid of being caught, and once trust is broken, it is very difficult to regain. Lies create confusion and harm relationships and reputations.",
        },
        audios: {
            urdu: "/assets/audios/TRUTHFULNESS_THE_GREATEST_VIRTUE/Urdu.wav",
            english: "/assets/audios/TRUTHFULNESS_THE_GREATEST_VIRTUE/English.wav",
        }
    },
    quran: {
        title: "Quran on Truthfulness",
        intro: "Truthfulness is one of the greatest virtues that defines a person’s character. It means being honest in our words, actions, and thoughts. A truthful person speaks the truth, stands by it even when it is difficult, and avoids deceit in all forms. Truthfulness builds trust, strengthens relationships, and forms the foundation of a good and peaceful society.",
        verses: [
            {
                id: "5:119",
                surah: "Surah Al-Ma'idah (5:119)",
                arabic: "قَالَ اللَّهُ هَٰذَا يَوْمُ يَنفَعُ الصَّادِقِينَ صِدْقُهُمْ ۚ لَهُمْ جَنَّاتٌ تَجْرِي مِن تَحْتِهَا الْأَنْهَارُ خَالِدِينَ فِيهَا أَبَدًا ۚ رَّضِيَ اللَّهُ عَنْهُمْ وَرَضُوا عَنْهُ ۚ ذَٰلِكَ الْفَوْزُ الْعَظِيمُ",
                translation: "This is the Day when the truthful will benefit from their truthfulness. For them are gardens beneath which rivers flow, wherein they will abide forever. Allah is pleased with them, and they are pleased with Him. That is the great attainment.",
                reflection: "The eternal reward of those who live truthfully — integrity in this life becomes their salvation in the next.",
                audio: "/assets/audios/Quran_on_Truthfulness/Surah Al-Ma'idah (5119).aac"
            },
            {
                id: "33:70-71",
                surah: "Surah Al-Ahzab (33:70–71)",
                arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ وَقُولُوا قَوْلًا سَدِيدًا يُصْلِحْ لَكُمْ أَعْمَالَكُمْ وَيَغْفِرْ لَكُمْ ذُنُوبَكُمْ ۗ وَمَن يُطِعِ اللَّهَ وَرَسُولَهُ فَقَدْ فَازَ فَوْزًا عَظِيمًا",
                translation: "O you who have believed, fear Allah and speak words of appropriate justice. He will then amend for you your deeds and forgive you your sins. And whoever obeys Allah and His Messenger has attained a great attainment.",
                reflection: "Always speak truthfully and justly; truthful speech links to divine forgiveness and success.",
                audio: "/assets/audios/Quran_on_Truthfulness/Surah Al-Ahzab (3370–71).aac"
            }
        ],
        audios: {
            urdu: "/assets/audios/Quran_on_Truthfulness/Urdu.wav",
            english: "/assets/audios/Quran_on_Truthfulness/English.wav",
        }
    },
    sunnah: {
        title: "Sunnah on Truthfulness",
        insights: [
            {
                title: "Truthfulness in Trade",
                text: "The Prophet (PBUH) said: The truthful and trustworthy merchant will be with the Prophets, the truthful, and the martyrs (in Paradise).",
                ref: "(Sunan at-Tirmidhi 1209)"
            },
            {
                title: "Reward for Truthfulness even in Hardship",
                text: "The Prophet (PBUH) said: If a person speaks the truth and is truthful in hardship, Allah raises him in rank and saves him from harm.",
                ref: "(Ibn Majah 4039 — Hasan)"
            }
        ],
        audios: {
            urdu: "/assets/audios/Sunnah_on_Truthfulness/Urdu.wav",
            english: "/assets/audios/Sunnah_on_Truthfulness/English.wav",
        }
    },
    questions: {
        title: "Reflective Questions",
        list: [
            "When have you faced a situation where being truthful came at a personal cost? What did you learn from that experience?",
            "How do academic pressures influence your commitment to truthfulness in exams, assignments, or group work?",
            "What is the difference between being truthful with others and being truthful with yourself? Which do you find more challenging, and why?",
            "In what ways can truthfulness contribute to leadership, trust, and collaboration within a university or professional setting?",
            "How does truthfulness shape your long-term goals and personal integrity? What strategies can you use to stay truthful in complex or competitive environments?"
        ],
        audios: {
            urdu: "/assets/audios/Reflective_Questions/Urdu.wav",
            english: "/assets/audios/Reflective_Questions/English.wav",
        }
    },
    dilemmas: {
        title: "Truthfulness Dilemma Scenarios",
        objective: "Encourage Ethical Decision-Making",
        scenarios: [
            "Present students with short real-life dilemmas (e.g., finding a lost wallet, copying a friend’s assignment, or giving truthful feedback).",
            "In small groups, discuss: What would you do and why? What are the short- and long-term consequences of each choice?",
            "Debrief as a class to highlight moral reasoning and integrity."
        ],
        audios: {
            urdu: "/assets/audios/TRUTHFULNESS_DILEMMA_SCENARIOS/Urdu.wav",
            english: "/assets/audios/TRUTHFULNESS_DILEMMA_SCENARIOS/English.wav",
        }
    },
    mirror: {
        title: "Mirror Moments",
        objective: "Deepen Self-Awareness",
        text: "Ask students to write for 10 minutes on:",
        prompts: [
            "When have I struggled to be truthful, and what did I learn?",
            "How does truthfulness impact my relationships and goals?"
        ],
        footer: "Optionally, invite volunteers to share insights (voluntary sharing helps build trust).",
        audios: {
            urdu: "/assets/audios/MIRROR_MOMENTS_PERSONAL_REFLECTION_WRITING/Urdu.wav",
            english: "/assets/audios/MIRROR_MOMENTS_PERSONAL_REFLECTION_WRITING/English.wav",
        }
    },
    roleplay: {
        title: "Truthfulness Role Play",
        objective: "Bridge the Gap Between Theory and Practice",
        scenarios: [
            "Divide the class into small groups.",
            "Assign each group a scenario (e.g., a student realizes they received too much change at a shop, or a friend asks them to lie to cover for them).",
            "Perform the role-play, showing both a 'dishonest' and a 'truthful' response.",
            "Reflect as a group on how it felt to choose the truthful path."
        ],
        audios: {
            urdu: "/assets/audios/TRUTHFULNESS_ROLE_PLAY/Urdu.wav",
            english: "/assets/audios/TRUTHFULNESS_ROLE_PLAY/English.wav",
        }
    },
    pledge: {
        title: "Truthfulness Pledge and Group Reflection",
        objective: "Solidify Commitment to Truthfulness",
        text: "As a group, recite or sign a personal pledge:",
        pledge: "“I commit to being truthful in my words and actions, even when it is difficult, to build a life of integrity and trust.”",
        footer: "Discuss one way you will practice this pledge in the coming week.",
        audios: {
            urdu: "/assets/audios/TRUTHFULNESS_PLEDGE_AND_GROUP_REFLECTION/Urdu.wav",
            english: "/assets/audios/TRUTHFULNESS_PLEDGE_AND_GROUP_REFLECTION/English.wav",
        }
    },
    about: {
        title: "About Us",
        content: [
            "Gift Moral Nexus is dedicated to fostering ethical growth and moral integrity within the university community and beyond.",
            "Our platform provides a unique blend of traditional wisdom and modern reflective practices to help students navigate complex moral landscapes. We believe that moral excellence is a journey of continuous growth and self-discovery."
        ],
        footer: "GIFT University - Society of Islamic Thought & Culture"
    },
    contact: {
        title: "Get in Touch",
        subtitle: "Have questions or want to collaborate with the Society of Islamic Thought and Culture? We'd love to hear from you.",
        details: [
            { label: "Email Official", value: "sitc@gift.edu.pk", icon: "email" },
            { label: "Phone Line", value: "+92 (55) 111 900 100", icon: "phone" },
            { label: "Campus Location", value: "GF-04, SITC, GIFT University", icon: "location" }
        ],
        form: {
            title: "Inquiry Form",
            subtitle: "We typically respond within 24 university hours.",
            fields: ["Full Name", "Email Address", "Message Description"]
        }
    },
    infographics: {
        title: "Infographics of 50 Best Seller Books",
        subtitle: "Key insights from the world's most influential books, visualized.",
        pdfs: [
            { title: "Success Habits", desc: "What the most successful people do before the break.", file: "/assets/pdf/What the most successful people Do before the break .pdf" },
            { title: "Morning Discipline", desc: "Make your bed - Small habits for major life changes.", file: "/assets/pdf/Make your bed.pdf" }
        ]
    },
    purpose: {
        title: "Our Purpose",
        vision: {
            title: "Our Vision",
            text: "To be a leading center for moral and ethical development, inspiring individuals to live with integrity, truthfulness, and compassion in all aspects of life."
        },
        mission: {
            title: "Our Mission",
            text: "To provide accessible resources, reflective activities, and community engagement opportunities that promote the practice of universal moral values, particularly truthfulness, as guided by Prophetic teachings."
        }
    },
    razehayat: {
        title: "Raz-e-Hayat",
        subtitle: "چوٹی کے لوگ",

        paragraphs: [
            "امریکہ کے 1986ء میں ایک اچھی کتاب شائع ہوئی ہے۔ اس کتاب کا نام ہے کرنے والے (Peak Performers)۔ اس کتاب میں مصنف نے امریکہ کے ان لوگوں اور گروہوں کا مطالعہ کیا ہے جنہوں نے زندگی کے میدان میں غیر معمولی کارنامے انجام دیے۔",

            "اس سلسلے میں مصنف نے نتیجہ نکالا کہ انسان میں ایک خاص قسم کا طاقت ور محرک (Powerful mission) موجود ہے جو کچھ بڑی کوشش (Superior effort) کا تقاضا کرتا ہے اور اس کوشش کے نتیجے میں بڑی کامیابی (Exceptional achievement) کے درجے تک پہنچاتا ہے۔",

            "1967ء میں ایک مشہور زمانہ ماہر تعلیم ڈاکٹر کارول ڈویک کے ساتھ مل کر اس نے ضروری مشکل کاموں کے انتخاب کی تحقیق کی۔ ان لوگوں میں کچھ لوگ عام تھے اور کچھ وہ لوگ تھے جو اپنے میدان میں بہت آگے بڑھ گئے تھے۔ تحقیق کے دوران یہ معلوم ہوا کہ جن لوگوں نے اپنے ذہن میں یہ تصور پیدا کر لیا کہ وہ بڑے کام کرنے کے لیے پیدا ہوئے ہیں وہی آگے جا کر کامیاب ہوئے۔ ان لوگوں کو اس تحقیق میں سپر اچیورز (Super-achievers) کا نام دیا گیا۔",

            "18 فیصد سے بھی کم ایسے تھے جنہیں یقین تھا کہ وہ کام مکمل ہونے کے بعد ناکام نہیں ہوں گے۔ ان میں سے کچھ ایسے تھے جو چھوٹے چھوٹے قدم اٹھاتے تھے اور بڑے کاموں کے لیے تیار ہوتے تھے۔ یہی وہ لوگ تھے جو بعد میں بڑے کام انجام دیتے ہیں۔",

            "یہ ایک حقیقت ہے کہ انسان کو جب کوئی بڑا مقصد مل جاتا ہے تو اس کے اندرونی وسائل بیدار ہو جاتے ہیں۔ وہ اپنی پوری قوت کو کام میں لگا دیتا ہے اور بڑی کامیابی کی طرف بڑھتا ہے۔"
        ],

        quote: "People have been dreaming about going there for thousands of years. And we’re going to do it.",
        audios: {
            urdu: "/assets/audios/Raz_e_Hayat/Urdu.wav",
            english: "/assets/audios/Raz_e_Hayat/English.aac"
        }
    },
    motivationalVideos: {
        title: "Motivational Videos",
        subtitle: "Inspirational videos that encourage reflection, resilience, and ethical growth.",
        videos: [
            {
                id: 1,
                title: "Childhood Struggle and Sacrifice",
                youtube: "https://www.youtube.com/watch?v=QtE6dk7_mug"
            },
            {
                id: 2,
                title: "Father's Day Tribute",
                youtube: "https://www.youtube.com/watch?v=fUR5ks-t9TI"
            },
            {
                id: 3,
                title: "A Silent Tribute – Mother's Day",
                youtube: "https://www.youtube.com/watch?v=CjQkleDSW6I"
            },
            {
                id: 4,
                title: "Child and Man",
                youtube: "https://www.youtube.com/watch?v=2PFxSaL8ELE"
            },
            {
                id: 5,
                title: "How Would You Deal With This Situation?",
                youtube: "https://www.youtube.com/watch?v=_aNY2bJuXN8"
            },
            {
                id: 6,
                title: "Motivational Speech for Students",
                youtube: "https://www.youtube.com/watch?v=8ApPBM0TKM4"
            },
            {
                id: 7,
                title: "Barack Obama Motivation",
                youtube: "https://www.youtube.com/watch?v=2vBHh7D804o"
            },
            {
                id: 8,
                title: "Power of 1%",
                youtube: "https://www.youtube.com/watch?v=p0YfmGIr1Gs"
            },
            {
                id: 9,
                title: "Nick Vujicic Motivational Speech",
                youtube: "https://www.youtube.com/watch?v=OUisWAP9yls"
            },
            {
                id: 10,
                title: "Get Up and Grind",
                youtube: "https://www.youtube.com/watch?v=5f7E4DQG6kk"
            },
            {
                id: 11,
                title: "Work Hard",
                youtube: "https://www.youtube.com/watch?v=7qMNFZpdxps"
            },
            {
                id: 12,
                title: "How to Think Like a Billionaire",
                youtube: "https://www.youtube.com/watch?v=CzkLDLflAqk"
            },
            {
                id: 13,
                title: "Smart Mind Hustle",
                youtube: "https://www.youtube.com/watch?v=_-dc_--ON_Y"
            },
            {
                id: 14,
                title: "Thomas Jefferson's Insight – Signs of a Fool",
                youtube: "https://www.youtube.com/watch?v=4leTYCrnUt8"
            },
            {
                id: 15,
                title: "Sushmita Sen Inspirational Speech",
                youtube: "https://www.youtube.com/watch?v=vbks3PaCJuM"
            },
            {
                id: 16,
                title: "Elon Musk – The Legend",
                youtube: "https://www.youtube.com/watch?v=9KQJ-WkNoao"
            },
            {
                id: 17,
                title: "CA's Honest Life Advice to His Son",
                youtube: "https://www.youtube.com/watch?v=M6vexoUMZZk"
            },
            {
                id: 18,
                title: "Science Knowledge",
                youtube: "https://www.youtube.com/watch?v=QYy16br3HvE"
            },
            {
                id: 19,
                title: "9 Painful Truths of Life",
                youtube: "https://www.youtube.com/watch?v=B7UBYdQckhQ"
            },
            {
                id: 20,
                title: "Is There Life After?",
                youtube: "https://www.youtube.com/watch?v=Wk6eAZJf4rU"
            }
        ]
    },
    cardinalVirtuesCards: [
        { id: 'truthfulness', title: 'Truthfulness', desc: 'Core concept, benefits, consequences', path: '/truthfulness' },
        { id: 'quran', title: "Qur'an on Truthfulness", desc: 'Verses & reflections', path: '/quran' },
        { id: 'sunnah', title: 'Sunnah on Truthfulness', desc: 'Prophetic guidance', path: '/sunnah' },
        { id: 'questions', title: 'Reflective Questions', desc: 'Think deeply', path: '/questions' },
        { id: 'dilemmas', title: 'Truthfulness Dilemmas', desc: 'Scenario practice', path: '/dilemmas' },
        { id: 'mirror', title: 'Mirror Moments', desc: 'Personal reflection', path: '/mirror-moments' },
        { id: 'roleplay', title: 'Role Play', desc: 'Interactive learning', path: '/roleplay' },
        { id: 'pledge', title: 'Truthfulness Pledge', desc: 'Commitment & reflection', path: '/pledge' },
    ],
    razEHayatCards: [
        { id: 'razehayat', title: 'Raz-e-Hayat', desc: 'The secret to a fulfilling life based on timeless principles.', path: '/razehayat' },
    ],
    etpCards: [
        { id: 'etp-tors', title: 'ETP-ToRs', desc: 'Terms of Reference', path: '/etp/tors' },
        { id: 'etp-evaluation', title: 'ETP- Ethical Evaluation Criteria', desc: 'Evaluation standards', path: '/etp/evaluation' },
        { id: 'etp-survey', title: 'ETP- Customer Satisfaction Survey Form', desc: 'Feedback collection', path: '/etp/survey' },
        { id: 'etp-self-assessment', title: 'ETP- Ethics Self Assessment Toolkit PMI', desc: 'Self assessment tool', path: '/etp/self-assessment' },
        { id: 'etp-training', title: 'ETP-3hr-Training Workshop', desc: 'Workshop program', path: '/etp/training' },
        { id: 'etp-facilitator', title: "ETP- Workshop Facilitator's Notes", desc: 'Facilitator guide', path: '/etp/facilitator' },
        { id: 'etp-harvard', title: 'ETP Workshop - Harvard Approach', desc: 'Case study method', path: '/etp/harvard' },
        { id: 'etp-seerah', title: 'ETP Workshop - Seerah Case Study', desc: 'Prophetic business ethics', path: '/etp/seerah' },
        { id: 'etp-hudaybiyyah', title: 'ETP Workshop - Hudaybiyyah Case', desc: 'Negotiation ethics', path: '/etp/hudaybiyyah' },
        { id: 'etp-singapore', title: 'ETP Workshop - Singapore Case Study', desc: 'Global ethics model', path: '/etp/singapore' },
    ],
    etp: {
        title: "Emandar Tājir Program",
        subtitle: "A Character, CSR & ESG Development Initiative at GIFT University",
        intro: "Inspired by Islamic business ethics, the Seerah of Prophet Muhammad ﷺ, and modern principles of Corporate Social Responsibility (CSR) and Environmental, Social and Governance (ESG), the Emandar Tājir Program aims to cultivate a new generation of ethical business leaders."
    },
    etpTors: {
        title: "ETP – Terms of Reference (ToR)",
        programTitle: {
            heading: "Program Title",
            name: "Emandar Tājir Program (ETP)",
            tagline: "A Character, CSR & ESG Development Initiative at GIFT University."
        },
        background: {
            heading: "Background & Rationale",
            text: "The business landscape in Pakistan faces increasing challenges related to trust, ethical conduct, transparency, and customer rights. Inspired by Islamic business ethics, the <strong>Seerah of Prophet Muhammad ﷺ</strong>, and modern principles of <strong>Corporate Social Responsibility</strong> (CSR) and <strong>Environmental, Social and Governance</strong> (ESG). The <strong><em>Emandar Tājir</em></strong> Program aims to cultivate a new generation of ethical business leaders who embody honesty (<em>emāndāri</em>), fairness, integrity, and environmental, social & governance responsibility.\n\nGIFT University intends to institutionalize this program as part of its commitment to community engagement, value-driven education, and regional development."
        },
        objectives: {
            heading: "Program Objectives",
            list: [
                "<strong>Develop ethical business leaders</strong> equipped with Islamic and contemporary business ethics.",
                "<strong>Promote a culture of honesty and fair trade</strong> among students, alumni, and local business communities.",
                "<strong>Strengthen community trust</strong> through ethical business practices.",
                "<strong>Provide training, certification, and mentorship</strong> to emerging traders and entrepreneurs.",
                "<strong>Document and promote best practices</strong> using case studies from Seerah, Muslim history, and modern corporate examples.",
                "<strong>Create a sustainable model</strong> for ethical commerce training replicable across Pakistan."
            ]
        },
        scope: {
            heading: "Scope of Work",
            sections: [
                {
                    title: "4.1 Curriculum Development",
                    items: ["Ethical commerce framework", "Modules based on Seerah & Muslim business history", "Contemporary business ethics & CSR", "ESG best practices", "Local market case studies", "Real-world business simulations"]
                },
                {
                    title: "4.2 Training & Capacity Building",
                    items: ["Workshops, seminars, and certifications", "Sessions delivered by Islamic scholars, business leaders & professors", "On-campus and community-based training"]
                },
                {
                    title: "4.3 Community Engagement",
                    items: ["Collaboration with local businesses in Gujranwala and surrounding regions", "Awareness drives on fair trade, consumer rights & corporate honesty"]
                },
                {
                    title: "4.4 Mentorship Program",
                    items: ["Pairing students with ethical business practitioners", "Monthly progress review sessions", "Business ethics compliance mentoring"]
                },
                {
                    title: "4.5 Monitoring & Evaluation (M&E)",
                    items: ["Ethical Evaluation of Projects", "PMI Self-assessment Tool", "Customer feedback Survey assessments", "Business ethics scorecard for participants", "GIFT Marketplace Visits for Ethical evaluation / Mystery Shopping"]
                },
                {
                    title: "4.6 Certification & Recognition",
                    items: ["<em>\"Emandar Tājir Certification\"</em>", "<strong><em>1. Most Ethical Trader Award</em></strong>", "<strong><em>2. Fair Trade Excellence Award</em></strong>"]
                }
            ]
        },
        linkage: {
            heading: "Linkage with Degree Programs",
            paragraphs: [
                "The ethical, moral, and socially responsible principles imparted through the Emandar Tājir Program (ETP) are further operationalized and assessed through students' participation in degree-credit entrepreneurial activities at the Centre for Social Entrepreneurship (CSE).",
                "During their academic journey, students are introduced to ethical commerce, fair trade, CSR, and ESG concepts through ETP workshops, training sessions, and certifications. When these students progress to CSE-supported startup activities—such as on-campus and online selling, incubation projects, and final-year startup execution—their understanding of ethics is translated into real business practice.",
                "At CSE, ethical conduct is not only encouraged but formally tested, monitored, and graded through a structured Ethics Assessment Framework. Students are assessed on fair pricing, transparent transactions, POS compliance, teamwork, stakeholder engagement, and social responsibility.",
                "This integration creates a holistic learning loop, where ETP builds ethical foundations, and CSE validates and strengthens them through execution and assessment, bridging the gap between theory and practice. Together, ETP and CSE develop entrepreneurs who are not only commercially capable but also principled, responsible, and aligned with societal and national economic goals."
            ]
        },
        ethicalGuidelines: {
            heading: "Ethical Guidelines of Doing Business at Campus",
            intro: "The Centre of Entrepreneurship and Business at Campus (CSE) is dedicated to supporting students on their entrepreneurial journey. These guidelines are designed to assist students in conducting their business activities on campus in a responsible, ethical, and successful manner.",
            rules: [
                "Familiarize yourself with the norms of CSE and seek appropriate approvals from the CSE or relevant authority before starting any business activity on campus.",
                'Set fair and reasonable prices of the products and services, that is in accordance with the value provided to consumers. Avoid exploitative gains and measure justly. Mentioned in Quran (Surah Al-Isra) 17:35 — \"And give in full when you measure, and weigh with an even balance. That is fairest and best in the end.\"',
                "Conduct your business with integrity and honesty. Avoid misleading advertising, false claims, or any unethical practices. Respect the intellectual property of others.",
                "Be adaptable and open to the feedback from the team members, mentors, industry experts, and customers. Use this feedback as an opportunity to improve and refine your project.",
                "Maintain your accounts so all team members and other stakeholders can get the clear picture of your investments and returns. Always issue sale receipts using the approved POS.",
                "Make sure the premises are kept clean and tidy. Ensure to clean up the areas after the activity, so that no debris or waste is left behind that could cause damage.",
                "Use eco-friendly materials, reduce waste, and promote recycling initiatives. Prioritize suppliers and products that adhere to fair trade practices.",
                "Utilize CSE approved advertising platforms.",
                "Respect confidentiality and ensure the protection of sensitive data of your partners and customers."
            ],
            disclaimers: [
                "Vendors from outside are not permitted on campus. If you cause any damage to university property, students will have to face disciplinary action.",
                "Engaging in unethical activities, such as price manipulation, data alteration, or reporting incorrect information, will lead to disciplinary action.",
                "Responsibility lies with the students about the safe custody of their belongings.",
                "Students need to adhere to the university guidelines."
            ]
        },
        scoreCard: {
            heading: "CSE & ETP Integrated Ethics Score Card",
            intro: "This score card is jointly designed by Emandar Tajir Program and the Centre for Social Entrepreneurship (CSE). It evaluates students' ethical business conduct in light of Islamic values, CSR & ESG principles, and CSE operational guidelines.",
            categories: [
                { name: "Integrity & Honesty (Amanah)", indicators: ["Truthful dealings", "No fraud", "Fulfillment of contracts", "Honest advertising"], weight: "20%" },
                { name: "Transparency & Accountability", indicators: ["Clear pricing", "Proper records", "POS compliance", "Issuance of receipts", "Accurate reporting"], weight: "20%" },
                { name: "Fair Trade & Justice (Adl)", indicators: ["Fair profit", "Accurate measures", "No exploitation", "Ethical competition"], weight: "20%" },
                { name: "CSE Compliance & Operational Ethics", indicators: ["PoS policy compliance", "Cleanliness of premises", "Approved advertising", "Discipline & punctuality"], weight: "20%" },
                { name: "Social Responsibility, CSR & ESG", indicators: ["Employee welfare", "Environmental care", "Waste reduction", "Community engagement", "ESG reporting"], weight: "20%" }
            ],
            note: "Scores are awarded on a scale of 1 (Poor) to 5 (Excellent). Final results reflect ethical compliance with Islamic principles, CSE regulations, CSR & ESG standards.",
            spiritualNote: "Spiritual Ethics which includes God-consciousness (Taqwa); Pure intention (Niyyah); Self-accountability (Muhasaba) cannot be measured. However it is advised to maintain Reflection Journals to reflect upon spiritual aspects."
        },
        ethicalCompliance: {
            heading: "Ethical Compliance",
            items: ["Islamically accepted business principles", "GIFT University Code of Conduct", "CSE Compliance & Operational Ethics", "National laws & fair trade regulations"]
        },
        outputs: {
            heading: "Expected Outputs",
            list: [
                "A structured Emandar Tājir curriculum & training manual.",
                "A minimum of 2 training cohorts per year.",
                "Certified participants demonstrating ethical business competencies.",
                "Published case studies booklet featuring Islamic and modern examples.",
                "Annual Ethical Business Conference hosted at GIFT University.",
                "Strengthened linkages between academia and local industry."
            ]
        },
        kpis: {
            heading: "Key Performance Indicators (KPIs)",
            list: [
                "Number of participants trained & certified",
                "Improvement in ethics competency test scores",
                "Number of community and business partners engaged",
                "Quality and quantity of case studies produced",
                "Participant satisfaction ratings",
                "Annual growth in program participation"
            ]
        },
        management: {
            heading: "Program Management Team",
            roles: ["Director", "Program Coordinator", "Training Lead", "M&E Officer"]
        },
        responsibilities: {
            heading: "Roles & Responsibilities",
            sections: [
                { role: "Program Coordinator", duties: ["Oversee program implementation", "Liaise with trainers, scholars, businesses", "Ensure deliverables and reporting"] },
                { role: "Training Lead", duties: ["Conduct sessions, develop training materials", "Ensure quality instructional delivery"] },
                { role: "M&E Officer", duties: ["Track KPIs, assessments, reports"] }
            ]
        },
        reporting: {
            heading: "Reporting Requirements",
            items: ["Quarterly progress reports", "Annual impact report", "Curriculum & Training manuals", "Participant performance scores", "Success stories & case books"]
        },
        budget: {
            heading: "Budget & Resource Allocation",
            text: "To be approved by the Finance Department and Chairman GIFT University. Includes: Training material, Faculty/trainer compensation."
        },
        review: {
            heading: "Review & Revision of ToRs",
            text: "These ToRs may be revised annually based on program evaluation and Steering Committee directives."
        }
    }
};
