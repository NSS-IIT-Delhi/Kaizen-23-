// "id":{
//     "title": "",
//     "description": "",
//     "image": ,
//     "date": "",
//     "content": "",
// 
//     "sections": [
//          {"type":"",
//           "title":"Section Title",         
//           "data":[
//              card,
//              card,
//              ...
//          ]},
//          ...
//     ]
// 
//      if type=="TS" : card = { title , tubtitle }
//      if type=="PTS": card = { picture , title , subtitle }


import sociopreneurs from './banners/socio_poster.jpeg'
import aurora from './banners/aurora_poster.jpeg'
import tamasha from './banners/tamasha_poster.jpeg'
import bazinga from './banners/bazinga_poster.jpeg'
import resolved from './banners/404_resolved.jpeg'
import all_rise from './banners/allrise_poster.jpeg'
import ingenious_geeks from './banners/ig_poster.jpeg'
import samrat from './cardPictures/samrat.png'
import seshan from './cardPictures/seshan.jpeg'

// export const categories = [ 'events', 'competitions', 'workshops']


export const events = 
    {
        "style_green":{
            "title": "STYLE GREEN",
            "description": "A stage to exhibit recyclable and sustainable fashion",
            "image": sociopreneurs,
            "date": "2nd April",
            "time": "6:45pm - 8:45pm",
            "venue": "Seminar Hall, and Live Streaming on Zoom",
            "content": "A stage to exhibit recyclable and sustainable fashion.",
            "rank":"11",
            "category":"competition",
            "rulebook":'',

            "sections": [
               {"type": "TS",
                "title":"PRIZES",
                "data":[
                    {
                        "title": "Winner",
                        "subtitle": "Rs. 5000 + Discount Coupons from GeeksforGeeks worth Rs. 2000 + certificate",
                    },
                    {
                        "title": "1st Runner Up",
                        "subtitle": "Rs. 3000 + Discount Coupons from GeeksforGeeks worth Rs. 1500 + certificate",   
                    },
                ]},              
            ]
        },
        "sarcastic_spardha":{
            "title": "SARCASTIC SPARDHA",
            "description": "A parody making competition to bring attention to social issues and inspire positive change in our society",
            "image": sociopreneurs,
            "date": "2nd April",
            "time": "6:45pm - 8:45pm",
            "venue": "Seminar Hall, and Live Streaming on Zoom",
            "content": "A parody is a creative work that imitates or mocks a well-known piece of art, literature, or music in a humorous way. Therefore, we are using the power of parody to bring attention to social issues and inspire positive change in our society            ",
            "rank":"10",
            "category":"competition",
            "rulebook":'',

            "sections": [
                {"type": "TS",
                "title":"PRIZES",
                "data":[
                    {
                        "title": "Winner",
                        "subtitle": "Rs. 5000 + Discount Coupons from GeeksforGeeks worth Rs. 2000 + certificate",
                    },
                    {
                        "title": "1st Runner Up",
                        "subtitle": "Rs. 3000 + Discount Coupons from GeeksforGeeks worth Rs. 1500 + certificate",   
                    },
                ]},                
            ]
        },
        "social_tasveer":{
            "title": "SOCIAL TASVEER",
            "description": "A photo story competition on social issues to picture the change you want to see in the world",
            "image": aurora,
            "date": "22th March",
            "time": "6:45pm - 8:45pm",
            "venue": "Seminar Hall, and Live Streaming on Zoom",
            "content": "A photostory competition on social issues to picture the change you want to see in the world",
            "rank":"9",
            "category":"competition",
            "rulebook":'',

            
            "sections": [
               {"type": "TS",
                "title":"PRIZES",
                "data":[
                    {
                        "title": "Winner",
                        "subtitle": "Rs. 5000 + Discount Coupons from GeeksforGeeks worth Rs. 2000 + certificate",
                    },
                    {
                        "title": "1st Runner Up",
                        "subtitle": "Rs. 3000 + Discount Coupons from GeeksforGeeks worth Rs. 1500 + certificate",   
                    },
                ]},
                
            ]
        },
        "social_sawaal":{
            "title": "THE SOCIAL SAWAAL",
            "description": "A quizzing competition for school students to encourage young minds",
            "image": tamasha,
            "date": "1st April",
            "time": "6:45pm - 8:45pm",
            "venue": "Seminar Hall, and Live Streaming on Zoom",
            "content": "A quizzing competition for school students, is a flagship event at Kaizen '23, where we encourage young minds to become aware of the social aspects of humanity and compete against the brightest minds in the NCR region",
            "rank":"8",
            "category":"competition",


            
            "sections": [
               {"type": "TS",
                "title":"PRIZES",
                "data":[
                    {
                        "title": "Winner",
                        "subtitle": "Rs. 5000 + Discount Coupons from GeeksforGeeks worth Rs. 2000 + certificate",
                    },
                    {
                        "title": "1st Runner Up",
                        "subtitle": "Rs. 3000 + Discount Coupons from GeeksforGeeks worth Rs. 1500 + certificate",   
                    },
                ]},
            ]
        },     
        "soch":{
            "title": "SOCH",
            "description": " Aworkshop based on Gender Sensitization",
            "image": bazinga,
            "date": "18th April",
            "time": "6:45pm - 8:45pm",
            "venue": "Seminar Hall, and Live Streaming on Zoom",
            "content": "This workshop will be based on Gender Sensitization, where we’ll discuss about all about different types of Gender, Myths & Facts about LGBTQ+ Community and intreact with speakers from the community.",
            "rank":"2",
            "category":"workshop",


            
            "sections": [
               {"type": "TS",
                "title":"PRIZES",
                "data":[
                    {
                        "title": "Winner",
                        "subtitle": "Rs. 5000 + Discount Coupons from GeeksforGeeks worth Rs. 2000 + certificate",
                    },
                    {
                        "title": "1st Runner Up",
                        "subtitle": "Rs. 3000 + Discount Coupons from GeeksforGeeks worth Rs. 1500 + certificate",   
                    },
                ]},
            ]
        },
        "resolved":{
            "title": "404 RESOLVED",
            "description": "A design-based, sprint where participants compete to find the best technical solution to a social problem",
            "image": resolved,
            "date": "18th April",
            "time": "6:45pm - 8:45pm",
            "venue": "Seminar Hall, and Live Streaming on Zoom",
            "content": "A design sprint hackathon aimed to devise technical scalable solutions for burning social nodus persisting in society.",
            "rank":"6",
            "category":"event",


            
            "sections": [
               {"type": "TS",
                "title":"PRIZES",
                "data":[
                    {
                        "title": "Winner",
                        "subtitle": "Rs. 5000 + Discount Coupons from GeeksforGeeks worth Rs. 2000 + certificate",
                    },
                    {
                        "title": "1st Runner Up",
                        "subtitle": "Rs. 3000 + Discount Coupons from GeeksforGeeks worth Rs. 1500 + certificate",   
                    },
                ]},
            ]
        }        ,
        "sakshi":{
            "title": "SAKSHI",
            "description": "A workshop on Stop Child Sexual Abuse",
            "image": all_rise,
            "date": "18th April",
            "time": "6:45pm - 8:45pm",
            "venue": "Seminar Hall, and Live Streaming on Zoom",
            "content": "It emulates a courtroom and captures the thrill of a real court hearing, to raise awareness on common laws to protect oneself with!",
            "rank":"1",
            "category":"workshop",


            
            "sections": [
               {"type": "TS",
                "title":"PRIZES",
                "data":[
                    {
                        "title": "Winner",
                        "subtitle": "Rs. 5000 + Discount Coupons from GeeksforGeeks worth Rs. 2000 + certificate",
                    },
                    {
                        "title": "1st Runner Up",
                        "subtitle": "Rs. 3000 + Discount Coupons from GeeksforGeeks worth Rs. 1500 + certificate",   
                    },
                ]},
            ]
        },        
        "ingenious_geeks":{
            "title": "INGENIOUS GEEKS 2.0",
            "description": "A science exhibition competition for school students to showcase their creative innovative mind",
            "image": ingenious_geeks,
            "date": "2nd April",
            "time": "6:45pm - 8:45pm",
            "venue": "Seminar Hall, and Live Streaming on Zoom",
            "content": "A science exhibition competition for school students to showcase their creative innovative mind",
            "rank":"4",
            "category":"competition",
            'rulebook':'https://drive.google.com/file/d/12d7VWu8OWXT8DI-Z5DiQjP1bNRd5zmoQ/view?usp=share_link',

            
            "sections": [
                {"type": "PTS",
                "title":"OUR ESTEEMED PANEL OF JUDGES",
                "data":[
                    {
                        "title": "Prof. Samrat Mukhopadhyay",
                        "subtitle": "Associate Professor, IIT Delhi",
                        "picture": samrat,
                    },
                    {
                        "title": "Prof. Seshan Srirangarajan",
                        "subtitle": "Assistant Professor, IIT Delhi",   
                        "picture": seshan,

                    },
                ]},                  
               {"type": "TS",
                "title":"PRIZES",
                "data":[
                    {
                        "title": "Winner",
                        "subtitle": "Rs. 5000 + Discount Coupons from GeeksforGeeks worth Rs. 2000 + certificate",
                    },
                    {
                        "title": "1st Runner Up",
                        "subtitle": "Rs. 3000 + Discount Coupons from GeeksforGeeks worth Rs. 1500 + certificate",   
                    },
                    {
                        "title": "2nd Runner Up",
                        "subtitle": "Rs. 2000 + Discount Coupons from GeeksforGeeks worth Rs. 1500 + certificate",   
                    },
                ]},
              
            ]
        }        

    }
