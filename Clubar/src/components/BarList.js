import React, {Component} from 'react'
import {Text, ScrollView} from 'react-native';
import BarCard from './BarCard';
import { withNavigation } from 'react-navigation';

class BarList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const bares = [
            {
                id:1,
                name:'Belgica',
                address:'Membrillar 275',
                location: 'Caballito',
                uri: 'https://u.tfstatic.com/restaurant_photos/581/201581/169/612/kombi-bar-vue-de-la-salle-87e4b.jpg',
                description: 'Un bar (del inglés bar, barra) es un establecimiento comercial donde se sirven bebidas alcohólicas y no alcohólicas y aperitivos, generalmente para ser consumidos de inmediato en el mismo establecimiento en un servicio de barra. La persona que atiende el bar suele estar de pie, tras la barra, y en el mundo anglosajón se le conoce tradicionalmente con el nombre de barman o bartender.',
                items: [
                    {
                        title: 'Martini',
                        image: 'https://sm.askmen.com/askmen_latam/photo/default/26-123911-how-to-take-a-shot-like-a-man-basics_uffy.jpg',
                        ingredients: [
                            'Ron',
                            'Coca',
                            'Whisky',
                            'Agua tonica'
                        ]
                    },
                    {
                        title: 'Fernet con coca',
                        image: 'https://66.media.tumblr.com/avatar_ae4af8a5b6e9_128.pnj',
                        ingredients: [
                            'Ron',
                            'Coca',
                            'Whisky',
                            'Agua tonica'
                        ]
                    },
                    {
                        title: 'Caipiroska',
                        image: 'https://www.jamieoliver.com/drinks-tube/wp-content/uploads/2014/06/Cosmo.jpg',
                        ingredients: [
                            'Ron',
                            'Coca',
                            'Whisky',
                            'Agua tonica'
                        ]
                    },
                    {
                        title: 'Destornillador',
                        image: 'https://img.etimg.com/thumb/msid-62249256,width-643,imgsize-127088,resizemode-4/no-longer-just-the-old-mans-drink-cognac-is-the-spirit-of-2018.jpg',
                        ingredients: [
                            'Ron',
                            'Coca',
                            'Whisky',
                            'Agua tonica'
                        ]
                    },
                    {
                        title: 'Septimo regimiento',
                        image: 'https://www.aheadofthyme.com/wp-content/uploads/2018/01/apple-cider-turmeric-detox-drink-3.jpg',
                        ingredients: [
                            'Ron',
                            'Coca',
                            'Whisky',
                            'Agua tonica'
                        ]
                    },
                    {
                        title: 'Cuba libre',
                        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPD3SF6U6y-Z6n8u18jbZz2DlksT80zJbcPefWSt8FL4UhyMszbA',
                        ingredients: [
                            'Ron',
                            'Coca',
                            'Whisky',
                            'Agua tonica'
                        ]
                    }
                ]
            },
            {
                id:2,
                name:'Antares',
                address:'Av. Libertador 5948',
                location: 'La plata',
                uri: 'https://images.pexels.com/photos/63633/bar-local-cong-ireland-63633.jpeg?cs=srgb&dl=alcoholic-beverages-bar-beer-63633.jpg&fm=jpg',
                description: 'Un bar (del inglés bar, barra) es un establecimiento comercial donde se sirven bebidas alcohólicas y no alcohólicas y aperitivos, generalmente para ser consumidos de inmediato en el mismo establecimiento en un servicio de barra. La persona que atiende el bar suele estar de pie, tras la barra, y en el mundo anglosajón se le conoce tradicionalmente con el nombre de barman o bartender.',
                items: [
                    {
                        title: 'Martini',
                        image: 'https://sm.askmen.com/askmen_latam/photo/default/26-123911-how-to-take-a-shot-like-a-man-basics_uffy.jpg',
                        ingredients: [
                            'Ron',
                            'Coca',
                            'Whisky',
                            'Agua tonica'
                        ]
                    },
                    {
                        title: 'Fernet con coca',
                        image: 'https://66.media.tumblr.com/avatar_ae4af8a5b6e9_128.pnj',
                        ingredients: [
                            'Ron',
                            'Coca',
                            'Whisky',
                            'Agua tonica'
                        ]
                    },
                    {
                        title: 'Caipiroska',
                        image: 'https://www.jamieoliver.com/drinks-tube/wp-content/uploads/2014/06/Cosmo.jpg',
                        ingredients: [
                            'Ron',
                            'Coca',
                            'Whisky',
                            'Agua tonica'
                        ]
                    },
                    {
                        title: 'Destornillador',
                        image: 'https://img.etimg.com/thumb/msid-62249256,width-643,imgsize-127088,resizemode-4/no-longer-just-the-old-mans-drink-cognac-is-the-spirit-of-2018.jpg',
                        ingredients: [
                            'Ron',
                            'Coca',
                            'Whisky',
                            'Agua tonica'
                        ]
                    },
                    {
                        title: 'Septimo regimiento',
                        image: 'https://www.aheadofthyme.com/wp-content/uploads/2018/01/apple-cider-turmeric-detox-drink-3.jpg',
                        ingredients: [
                            'Ron',
                            'Coca',
                            'Whisky',
                            'Agua tonica'
                        ]
                    },
                    {
                        title: 'Cuba libre',
                        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPD3SF6U6y-Z6n8u18jbZz2DlksT80zJbcPefWSt8FL4UhyMszbA',
                        ingredients: [
                            'Ron',
                            'Coca',
                            'Whisky',
                            'Agua tonica'
                        ]
                    }
                ]
            },
            {
                id:3,
                name:'Lo de tincho',
                address:'Membrillar 275',
                location: 'Caballito',
                uri: 'http://www.amanogroup.de/wp-content/uploads/2015/08/0211.jpg',
                description: 'Un bar (del inglés bar, barra) es un establecimiento comercial donde se sirven bebidas alcohólicas y no alcohólicas y aperitivos, generalmente para ser consumidos de inmediato en el mismo establecimiento en un servicio de barra. La persona que atiende el bar suele estar de pie, tras la barra, y en el mundo anglosajón se le conoce tradicionalmente con el nombre de barman o bartender.',
                items: [
                    {
                        title: 'Martini',
                        image: 'https://sm.askmen.com/askmen_latam/photo/default/26-123911-how-to-take-a-shot-like-a-man-basics_uffy.jpg',
                        ingredients: [
                            'Ron',
                            'Coca',
                            'Whisky',
                            'Agua tonica'
                        ]
                    },
                    {
                        title: 'Fernet con coca',
                        image: 'https://66.media.tumblr.com/avatar_ae4af8a5b6e9_128.pnj',
                        ingredients: [
                            'Ron',
                            'Coca',
                            'Whisky',
                            'Agua tonica'
                        ]
                    },
                    {
                        title: 'Caipiroska',
                        image: 'https://www.jamieoliver.com/drinks-tube/wp-content/uploads/2014/06/Cosmo.jpg',
                        ingredients: [
                            'Ron',
                            'Coca',
                            'Whisky',
                            'Agua tonica'
                        ]
                    },
                    {
                        title: 'Destornillador',
                        image: 'https://img.etimg.com/thumb/msid-62249256,width-643,imgsize-127088,resizemode-4/no-longer-just-the-old-mans-drink-cognac-is-the-spirit-of-2018.jpg',
                        ingredients: [
                            'Ron',
                            'Coca',
                            'Whisky',
                            'Agua tonica'
                        ]
                    },
                    {
                        title: 'Septimo regimiento',
                        image: 'https://www.aheadofthyme.com/wp-content/uploads/2018/01/apple-cider-turmeric-detox-drink-3.jpg',
                        ingredients: [
                            'Ron',
                            'Coca',
                            'Whisky',
                            'Agua tonica'
                        ]
                    },
                    {
                        title: 'Cuba libre',
                        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPD3SF6U6y-Z6n8u18jbZz2DlksT80zJbcPefWSt8FL4UhyMszbA',
                        ingredients: [
                            'Ron',
                            'Coca',
                            'Whisky',
                            'Agua tonica'
                        ]
                    }
                ]
            },
            {
                id:4,
                name:'Darsena',
                address:'Serrano 275',
                location: 'Palermo',
                uri: 'http://beerstyle.com.ar/cnews/uploads/948458jdfjdfjfrjtrjtg.jpg',
                description: 'Un bar (del inglés bar, barra) es un establecimiento comercial donde se sirven bebidas alcohólicas y no alcohólicas y aperitivos, generalmente para ser consumidos de inmediato en el mismo establecimiento en un servicio de barra. La persona que atiende el bar suele estar de pie, tras la barra, y en el mundo anglosajón se le conoce tradicionalmente con el nombre de barman o bartender.',
                items: [
                    {
                        title: 'Martini',
                        image: 'https://sm.askmen.com/askmen_latam/photo/default/26-123911-how-to-take-a-shot-like-a-man-basics_uffy.jpg',
                        ingredients: [
                            'Ron',
                            'Coca',
                            'Whisky',
                            'Agua tonica'
                        ]
                    },
                    {
                        title: 'Fernet con coca',
                        image: 'https://66.media.tumblr.com/avatar_ae4af8a5b6e9_128.pnj',
                        ingredients: [
                            'Ron',
                            'Coca',
                            'Whisky',
                            'Agua tonica'
                        ]
                    },
                    {
                        title: 'Caipiroska',
                        image: 'https://www.jamieoliver.com/drinks-tube/wp-content/uploads/2014/06/Cosmo.jpg',
                        ingredients: [
                            'Ron',
                            'Coca',
                            'Whisky',
                            'Agua tonica'
                        ]
                    },
                    {
                        title: 'Destornillador',
                        image: 'https://img.etimg.com/thumb/msid-62249256,width-643,imgsize-127088,resizemode-4/no-longer-just-the-old-mans-drink-cognac-is-the-spirit-of-2018.jpg',
                        ingredients: [
                            'Ron',
                            'Coca',
                            'Whisky',
                            'Agua tonica'
                        ]
                    },
                    {
                        title: 'Septimo regimiento',
                        image: 'https://www.aheadofthyme.com/wp-content/uploads/2018/01/apple-cider-turmeric-detox-drink-3.jpg',
                        ingredients: [
                            'Ron',
                            'Coca',
                            'Whisky',
                            'Agua tonica'
                        ]
                    },
                    {
                        title: 'Cuba libre',
                        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPD3SF6U6y-Z6n8u18jbZz2DlksT80zJbcPefWSt8FL4UhyMszbA',
                        ingredients: [
                            'Ron',
                            'Coca',
                            'Whisky',
                            'Agua tonica'
                        ]
                    }
                ]
            },
        ]

        return (
            <ScrollView>
                {bares.map(bar => (
                    <BarCard 
                        bar={bar}
                        key={bar.id} 
                        />
                ))}
            </ScrollView>
        )
    }
}

export default BarList