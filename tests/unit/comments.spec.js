import { shallowMount,createLocalVue,render,mount } from '@vue/test-utils';
import Comments from '@/components/elements/Comments.vue';
import { BootstrapVue,IconsPlugin } from 'bootstrap-vue';

const localVue = createLocalVue();

localVue.use(BootstrapVue);
localVue.use(IconsPlugin);

const comments = [{
    id_Comments:12121212,
    user:'Simon',
    description:'test test',
    date: new Date()
},{
    id_Comments:21323213,
    user:'Alberto',
    description:'test test2',
    date: new Date()
}];

describe('Comments.vue', () => {
  it('Prop comments arrives correctly', () => {
    const wrapper = shallowMount(Comments, {
      localVue,
      propsData: { comments }
    })
    expect(wrapper.props().comments).toBe(comments)
  });
  
  it('renders comments correct', () => {

    const wrapper = mount(Comments, {
        localVue,
        propsData: { comments }
    });

    const count = wrapper.findAll('.card').length;

    expect(count).toBe(comments.length);
  })
  
  it('data card Comments render correct', () => {

    const wrapper = mount(Comments, {
        localVue,
        propsData: { comments }
    });

    const title = wrapper.findAll('.card-title').at(0);

    expect(title.text()).toMatch(comments[0].user);


    const date = wrapper.findAll('.card-subtitle').at(0);

    expect(date.text()).toMatch('hace unos segundos');

  })
  
})