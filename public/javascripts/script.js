
const cities = Vue.createApp({
    // root component, setting up data, methods
    data() {                            // create data function
        return {                        // that returns an object
            citiesList: [],
            countriesList: [],
            showModal: false,
            form: {},
            selected:'',
        }
    },
    methods: {                          // component methods
        async getCities() {
            let list = await fetch('http://localhost:3000/cities');
            let finalist = await list.json();
            this.citiesList = finalist.cities;
        },
        async getCountries() {
            let list = await fetch('http://localhost:3000/countries');
            let finalist = await list.json();
            this.countriesList = finalist.countries;
        },
        async postCity(e){
            e.preventDefault()
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(this.form)
            };

            await fetch('http://localhost:3000/cities', requestOptions)
                .then(async res =>{
                    if (!res.ok) {
                        return Promise.reject(error);
                    }
                    const data = await res.json()
                    console.log(data)
                    alert('City was added successfully to database')
                })
                .then(()=> {
                    this.getCities()
                    this.showModal = false
                })
                .catch(()=>{
                    alert('Some error occurred ')
                })
        },
        async deleteCity(id){
            await fetch(`http://localhost:3000/cities/${id}`, { method: 'DELETE' })
                .then(()=>{
                    alert('City was succesfully deleted')
                })
                .then(()=> this.getCities())
                .catch(()=>{
                    alert('Some error occurred ')
                })
        },

        async getCityByCountry() {

            if(this.selected === 'getAll'){
                this.getCities()
                return
            }

            let list = await fetch(`http://localhost:3000/citiescountry/${this.selected}`);
            let finalist = await list.json();
            this.citiesList = finalist.cities;
        }

    },
    mounted: function () {
        this.getCities();         // will execute at pageload
        this.getCountries();
    }
});

cities.mount('#cities');

const world = Vue.createApp({
    // root component, setting up data, methods
    data() {                            // create data function
        return {                        // that returns an object
            countriesList: [],
        }
    },
    methods: {                          // component methods
        async getCountries() {
            let list = await fetch('http://localhost:3000/countries');
            let finalist = await list.json();
            this.countriesList = finalist.countries;
        }

    },
    mounted: function () {
        this.getCountries();             // will execute at pageload
    }
});

world.mount('#world');          // refers to selector in page