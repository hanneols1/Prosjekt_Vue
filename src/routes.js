import Home from './views/Home.vue';
import ShowSlides from './views/ShowSlides.vue';
import ContactForm from './views/ContactForm.vue';
import Quizapp from './views/Quizapp.vue';
import SortTable from './views/SortTable.vue';
import TodoList from './components/TodoList.vue';

export default [
   { name: 'home', path: '/', component: Home },
   { name: 'ShowSlides', path: '/showslides', component: ShowSlides },
   { name: 'contactform', path: '/contactform', component: ContactForm },
   { name: 'quizapp', path: '/quizapp', component: Quizapp },
   { name: 'sorttable', path: '/sorttable', component: SortTable },
   { name: 'todolist', path: '/todolist', component: TodoList },
]