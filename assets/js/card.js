Vue.component('card', {

    props: ['cards', 'card'],

    data() {
        return {

        }
    },

    template: `
    
    <div class="card_container">
        <div class="card_upper">
            <div class="card-action">
                <!-- <svg class="arrow" viewBox="0 0 242.334 242.334" style="enable-background:new 0 0 242.334 242.334;"
                    xml:space="preserve">
                    <path d="M242.334,0H0v242.333h242.333L242.334,0L242.334,0z M94.025,49.749l28.284-28.284l99.702,99.702l-99.702,99.702
l-28.284-28.284l53.245-53.244H22.607v-36.349H147.27L94.025,49.749z" />
                </svg> -->
                <p class="status"> {{ card.status }} </p>
            </div>
            <div class="card_image">
                <img class="photo1" src="./assets/rent_bt_ori.png" alt="">
                <img class="photo2" :src="card.img" alt="">
            </div>
            <div class="card_ref">
                <p>Ref: XFT.259.KI.1</p>
            </div>
        </div>
        <div class="card_bottom">
            <div class="classes">
            <p class="">Etiam:</p>
            <p class="">Suspendi: </p>
            <p class="">Venenatis:</p>
            <p class="">Maecenas:</p>
            </div>
            <div class="descriptions">
            <p class="">{{ card.Etiam }}</p>
            <p class="">{{ card.Suspendi }} </p>
            <p class="">{{ card.Venenatis }}</p>
            <p class="">$ {{ card.Maecenas }} </p>
            </div>
        </div>
    </div>
    
    `
})


