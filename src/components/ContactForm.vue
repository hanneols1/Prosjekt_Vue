<template>
    <div v-if="isSending" class="loading">Sent! Thanks for contacting us! :) </div>
       <form class="wrapper"  @submit="onSubmit">
      <div class="items">
        <h1>Send Us a Message</h1>
        <input type="text" class="lname" placeholder="Full name" v-model="contact.FullName" required/>
            <input type="email" class="lname" placeholder="Your Email" v-model="contact.Email" required>
            <input type="tel" class="lname" placeholder="Phone number" v-model="contact.PhoneNumber" required/>
          <div class="msg">
              <textarea class="lbox" placeholder="Your Message" v-model="contact.Message" required=""></textarea>
          </div>
            <div>
              <button class="btn">Submit form</button>
            </div>
      </div>
      <!-- <div class="items">
          <input type="text" class="lname" placeholder="Full name" v-model="fullName" required=""/>
           <input type="email" class="lname" placeholder="Your Email" v-model="email.value" required=""
             :class="{ email , error: !email.valid }"/>
            <input type="tel" class="lname" placeholder="Phone number" v-model="phoneNumber" required=""/>
            
            <div class="msg">
              <textarea class="lbox" placeholder=" Your Message" v-model="Message.text"  required=""></textarea>
            </div>
      </div> -->
   </form>

</template>

<script>
    export default {
     // Here we're declaring our data  
        data() {
            return {
                contact: {
                    FullName: '',
                    Email: '',
                    PhoneNumber: '',
                    Message: ''
                },
                isSending: false,                
            }
        },
        computed:{
            email() {
                return {
                    value: this.contact.Email,
                    valid: this.contact.Email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
                }
            }  
        },
            

        // Here we're declaring our methods
        methods:{
              //clear the form
        clearForm(){
            for (let field in this.contact) {
				      this.contact[field] = ''
			      }
        },
      
        // Handler for submit with alert message
          onSubmit(e) {
            e.preventDefault()
            this.isSending = true
            setTimeout(() => {
              //Build the message
              let message = new FormData();
              for(let field in this.contact){
                message.append(field, this.contact[field])
              }
               //Send the message to console 
              alert(message)
              //Clear the form
              this.clearForm();
              this.isSending = false;
            }, 1000)

            }
        }
        
      }

</script>

<!-- Here is the style -->
<style>
.loading {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
}
.wrapper {
      display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
        width: 100%;
        max-width: 1200px;
        padding: 0;      
}
.items {
        background-color:white;
        border-radius: 25px;
        box-shadow: 0px 24px 35px #645d972b;
        height: auto;
        width: auto;
        flex: 40%;
        margin: 10px;
        padding: 10px;
    }
.btn{ 
  border: none;
       width: 477px;
        height: 72px;
        font-size: 1.5em;
        font-weight: bold;
        text-align: center;
        background-color: #171736;
        border-radius: 70px;
        color: white;
        cursor: pointer;
    }
    .msg .lbox{
      margin: 15px;
      border: none;
      border-radius: 10px;
      background-color: #f2f2f2; 
      height: 159px;
      width: 477px;
    }
    .lname{
      margin: 20px;
      border: none;
      border-bottom: 2px solid #B4B1BC;
      height: 40px;
      width: 477px;
    }
    h1{
      font-size: 2em;
      font-weight: bold;
      text-align: center;
      color: #171736;
      margin: 15px;
    }

/* --| media queri for screen|--- */
@media screen and (max-width: 768px) {
    .wrapper {
        flex-direction: column;
    }
    .items {
        width: 100%;
        margin: 0;
        padding: 0;
    }
}
</style>

