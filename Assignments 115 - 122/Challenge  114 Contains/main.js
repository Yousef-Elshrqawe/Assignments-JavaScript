/*  Destructuring  - Challenge*/let chosen = 3;let myFriends = [    {title: 'Oussama', age: 39, available: true, skills: ['HTML', 'CSS']},    {title: 'Ahmed', age: 25, available: false, skills: ['PYTHON', 'DJANGO']},    {title: 'Sayed', age: 33, available: true, skills: ['PHP', 'LARAVEL']}];/*({title, age, available, skills: [, skills_tow]} = myFriends[0]);console.log(`            Name: ${title}            Age: ${age}            Availability: ${available ? "Available" : "Not Available"}            Last Skill: ${skills_tow}        `);*/for (let i = 0; i < myFriends.length; i++) {    if (i === chosen - 1) {        if (chosen <= myFriends.length) {            ({title, age, available, skills: [, skills_tow]} = myFriends[i]);            console.log(`            Name: ${title}            Age: ${age}            Availability: ${available ? "Available" : "Not Available"}            Last Skill: ${skills_tow}        `);        }    }}if (chosen > myFriends.length) {    console.log(`not object , object Present => ${myFriends.length} `)}