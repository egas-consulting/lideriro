var config = {
    style: 'mapbox://styles/ed1990/cll89htrx00n901pb3kms2ksx',
    accessToken: 'pk.eyJ1IjoiZWQxOTkwIiwiYSI6ImNsbHdiNzhwZzIxM2wzZHB2ZG15eXJiZWMifQ.scQ0rrxBGgelfcONLc30iA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    projection: 'globe',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: '<span style="font-family:sans; padding: 0.5vh; border-radius: 10px; color:#141414; font-size:1.6rem; background:#ffffff;" >Atlasul liderilor</span>',
    subtitle: '<span style=" font-family: Arial; color:#141414; font-size:2.4rem; background:#ffffff;" >De la educație, gen și generație, cum arată profilul fiecărui șef de stat din lume</span>',
    byline: '<p><a href="https://panorama.ro/author/edit/" target="_blank">Edit Gyenge</a></p>',
    footer: '<p style="margin-top:1px; margin-bottom:1px;"><b>14 august 2023 </b></p> <p style="margin-top:1px; margin-bottom:1px;"><b>Sursa datelor:</b> wikipedia.org, britannica.com, blackpast.org, site-urile administrațiilor prezidențiale </p> <p><B>Notă:</B> Afganistan - Anul de naștere al șefului de stat este aproximativ, nu există date clare disponibile. Președinția Bosniei și Herțegovinei este un organism format din trei membri, un bosniac, un sârb și un croat, care servesc colectiv. Cu toate că organismul nesubdivizat este capul de stat colectiv, un membru este desemnat ca președinte. Poziția de președinte se rotește de două ori în jurul celor trei membri la fiecare opt luni, iar candidatul care primește cele mai multe voturi în total devine primul președinte în decursul mandatului de patru ani.</p>',
    chapters: [
        {
            id: 'Methodology',
            alignment: 'center',        
            hidden: false,
            title: '',
            image: '',
            description: 'Înainte de un mega-an electoral în România, dar și în multe alte țări, Atlasul leaderilor se uită la cine sunt actualii șefi de stat din întreaga lume. Pentru că trăim vremuri în care lipsa percepută de leadership politic e teren fertil pentru mișcările populiste și radicale la nivel global, un inventar al tuturor președinților poate fi un exercițiu util pentru a depista anumite tipare. Harta interactivă de mai jos îi duce pe utilizatori printr-o călătorie în jurul lumii, prin intermediul CV-urilor celor care o conduc.',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'Methodology2',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'Articolul se uită la educația, dar și la influențele de generații și de gen ale președinților care erau în funcție până la data de 11 august 2023. E o primă schiță a elementelor care pot defini gândirea președinților. Datele au fost obținute din surse autorizate (site-uri ale administrațiilor prezidențiale, pagina de Wikipedia, site-uri de știri reputate etc.). <a href="https://en.wikipedia.org/wiki/List_of_academic_fields" target="_blank">Aici</a> este explicația detaliată a disciplinelor academice folosite pentru gruparea datelor.  ',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },



        
        {
            id: 'Methodology3',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'Reprezentarea șefilor de stat, și nu a șefilor de guvern oferă o perspectivă relevantă, deoarece, în majoritatea țărilor, șefii de stat sunt aleși prin vot popular direct. E un proces diferit, în cele mai multe cazuri, de numirea șefilor de guvern și oferă o perspectivă asupra opțiunilor cetățenilor. Cu alte cuvinte, pe cine aleg oamenii să îi reprezinte direct în cea mai înaltă funcție în stat, care sunt elementele din profilul candidatului cu care rezonează alegătorii?',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'Methodology4',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: '<img src="./legend.png" class="center">',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'Overview',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: '<img src="./firstchart.png" class="center">',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        
        {
            id: 'Overview2',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'Dintre toți șefii de stat actuali, 4,5% sunt absolvenți ai Universității Oxford, 3,4% au absolvit Academia Militară Regală Sandhurst, iar 2,2% au absolvit Universitatea Cambridge. Peste jumătate dintre șefii de stat au absolvit mai multe facultăți.',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        



        {
            id: 'Europe',
            alignment: 'center',
            hidden: false,
            title: 'Europa',
            image: '',
            description: 'În Europa, din cei 43 de șefi de stat, 8 sunt femei, reprezentând 18,6%. Aceasta marchează cea mai mare pondere de pe toate continentele. Grupul predominant de vârstă este cel al Generației Baby Boomers și al Generației X. Cei mai mulți dintre acești lideri și-au finalizat educația în domeniul Profesiilor și Științelor Aplicate (ex: agricultură, business, educație, inginerie, drept, medicină etc.).',
            location: {
                center: [24.233145, 45.976924],
                zoom: 5,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'Asia',
            alignment: 'center',
            hidden: false,
            title: 'Asia',
            image: '',
            description: 'În Asia, dintr-un total de 47 de șefi de stat, doar două sunt femei, în Singapore și India. Grupa de vârstă predominantă printre acești lideri este formată din Generația Baby Boomers, deși prezența a doi Mileniali este de remarcat. Background-ul educațional al majorității acestor lideri se încadrează în domeniul Profesiilor și Științelor Aplicate.',
            location: {
                center: [79.421513, 42.994603],
                zoom: 4,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'Africa',
            alignment: 'center',
            hidden: false,
            title: 'Africa',
            image: '',
            description: 'În Africa, dintr-un total de 54 de șefi de stat, sunt doar două femei președinte, în Etiopia și în Tanzania. Aceasta reprezintă cea mai mică proporție de șefi de stat de sex feminin, în comparație cu bărbații, la nivel global. Dacă ne uităm la reprezentarea generațională, predominanți sunt cei din Generația Baby Boomers, deși Africa are trei șefi de stat din Generația Millennial. Fundamentul academic al majorității acestor lideri este ancorat în domeniul Profesiilor și Științelor Aplicate. Tot aici se găsesc doi din cei patru șefi de stat din lume cu educație în domeniul Științelor Naturale (ex: biologie, chimie, fizică etc.).',
            location: {
                center: [20.947116, 5.211306],
                zoom: 4,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'The Americas',
            alignment: 'center',
            hidden: false,
            title: 'America de Nord și de Sud',
            image: '',
            description: 'Aici, dintr-un total de 35 de șefi de stat, patru sunt femei. În cadrul acestui grup de lideri, prezența generațională dominantă provine din cohorta Baby Boomers. Ce este distinct aici este faptul că majoritatea șefilor de stat au urmat studiile universitare în domeniul Științelor Umaniste și Sociale (ex: istorie, limbi străine, literatură, arte etc.)',
            location: {
                center: [-65.595005, -6.719165],
                zoom: 5,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'ind2',
            alignment: 'center',
            hidden: false,
            title: 'Folosește globul interactiv',
            image: '',
            description: 'Swipe, scroll, zoom pe glob și click pe fiecare șef de stat pentru mai multe detalii',
            location: {
                center: [33.177598, 35.103830],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'ind3',
            alignment: 'left',
            hidden: true,
            title: '',
            image: '',
            description: '',
            location: {
                center: [33.177598, 35.103830],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'ind3',
            alignment: 'left',
            hidden: true,
            title: '',
            image: '',
            description: '',
            location: {
                center: [33.177598, 35.103830],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        


        
        

    ]
};