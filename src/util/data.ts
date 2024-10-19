import sec2image1 from '../assets/r1ic1.png'
import sec2image2 from '../assets/r1ic2.png'
import pp3 from '../assets/Project_Planning.png'
import ic1 from '../assets/ic1.png'
import ic2 from '../assets/ic2.png'
import ic3 from '../assets/ic3.png'
import ic4 from '../assets/ic4.png'
import ic5 from '../assets/ic5.png'
import ic6 from '../assets/ic6.png'


export type sec2type = {
    image: string;
    title: string;
    description: string;
}
type sec3type<T> = {
    image: T,
    title1: T,
    title2: T,
    description: T,
    btnText: T,
    btnLink: T
}
type iconDataType<T> = {
    image: T;
  link: T;
  title: T;
}
type sec4type<T> = {
    title: string,
    icons: iconDataType<string>[]
}


type frontDataType = {
    sec2: sec2type[],
    sec3: sec3type<string>,
    sec4: sec4type<string>,
}

export const frontData:frontDataType = {
    sec2: [
        {
            image: sec2image1,
            title: "Design & Development",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dignissim."
        },
        {
            image: sec2image2,
            title: "Design & Development",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dignissim."
        },
        {
            image: sec2image2,
            title: "Design & Development",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dignissim."
        }
    ],
    sec3: {
        image: pp3,
        title1: 'lets talk about',
        title2: 'your project',
        btnText: 'Lets Talk',
        btnLink: '',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam magna diam, ultricies ut ultricies eu, cursus quis libero. Sed maximus ligula in purus bibendum viverra. Cras sed odio condimentum, finibus sem eu, auctor nisi. Fusce eget nunc tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam magna diam, ultricies ut ultricies eu, cursus quis libero. Sed maximus'
    },
    sec4: {
        title: '',
        icons: [
            {
                image: ic1,
                title: 'Web Applications',
                link: ''
            },
            {
                image: ic2,
                title: 'Android Applications',
                link: ''
            },
            {
                image: ic3,
                title: 'IOS Applications',
                link: ''
            },
            {
                image: ic4,
                title: 'Wordpress Development',
                link: ''
            },
            {
                image: ic5,
                title: 'UI/UX Design',
                link: ''
            },
            {
                image: ic6,
                title: 'Graphics Design',
                link: ''
            }
        ]
    }
}