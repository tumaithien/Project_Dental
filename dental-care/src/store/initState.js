import { v4 as uuidv4 } from 'uuid';

const initState = {
    listOurService:[
        {
            id: uuidv4(),
            title: 'Alignment Speciallist',
            summary: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Iste, Recusandae!',
            image: 'icon-1.svg'
        },
        {
            id: uuidv4(),
            title: 'Cosmetic Dentistry',
            summary: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Iste, Recusandae!',
            image: 'icon-2.svg'
        },
        {
            id: uuidv4(),
            title: 'Oral Hygiene Experts',
            summary: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Iste, Recusandae!',
            image: 'icon-3.svg'
        },
        {
            id: uuidv4(),
            title: 'Roots Canal Speciallist',
            summary: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Iste, Recusandae!',
            image: 'icon-4.svg'
        },
        {
            id: uuidv4(),
            title: 'Live Dental Advisory',
            summary: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Iste, Recusandae!',
            image: 'icon-5.svg'
        },
        {
            id: uuidv4(),
            title: 'Cavity Inspection',
            summary: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Iste, Recusandae!',
            image: 'icon-6.svg'
        }
        
    ],
    listWorkProcess:[
        {
            id: uuidv4(),
            title: 'Cosmetic Dentistry',
            summary: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Iste, Quibusdam?',
            image: 'process-1.png'
        },
        {
            id: uuidv4(),
            title: 'Pediatric Dentistry',
            summary: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Iste, Quibusdam?',
            image: 'process-2.png'
        },
        {
            id: uuidv4(),
            title: 'Dental Implants',
            summary: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Iste, Quibusdam?',
            image: 'process-3.png'
        }
    ],
    listSatisfield:[
        {
            id: uuidv4(),
            name: 'John Deo',
            position: 'Satisfield Clients',
            content: 'Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Voluptatum Laudantium Consequatur Illo, Aliquid Vero Quam Neque Doloremque Officia Laboriosam Beatae.',
            image: 'pic-1.png'
        },
        {
            id: uuidv4(),
            name: 'John Deo',
            position: 'Satisfield Clients',
            content: 'Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Voluptatum Laudantium Consequatur Illo, Aliquid Vero Quam Neque Doloremque Officia Laboriosam Beatae.',
            image: 'pic-2.png'
        },
        {
            id: uuidv4(),
            name: 'John Deo',
            position: 'Satisfield Clients',
            content: 'Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Voluptatum Laudantium Consequatur Illo, Aliquid Vero Quam Neque Doloremque Officia Laboriosam Beatae.',
            image: 'pic-3.png'
        },
    ]
}

export default initState