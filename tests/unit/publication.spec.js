import { shallowMount,createLocalVue,render,mount } from '@vue/test-utils';
import Publication from '@/components/elements/Publication.vue';
import { BootstrapVue,IconsPlugin } from 'bootstrap-vue';

const localVue = createLocalVue();

localVue.use(BootstrapVue);
localVue.use(IconsPlugin);


describe('Publication.vue', () => {
  it('Prop publication arrives correctly', () => {
    const item = {
        id:121212124121,
        user:'Simon',
        date: new Date(),
        description:'test description',
        reactions:1,
        comments:[]
    };
    const wrapper = shallowMount(Publication, {
      localVue,
      propsData: { item }
    })
    expect(wrapper.props().item).toBe(item)
  });

  it('renders card publication correct', () => {

    const item = {
        id:121212124121,
        user:'Simon',
        date: new Date(),
        description:'test description',
        reactions:1,
        comments:[]
    };

    const wrapper = mount(Publication, {
        localVue,
        propsData: { item }
    });

    const card = wrapper.find('.card');

    expect(card.exists()).toBe(true);
  })

  it('data card publication render correct', () => {

    const item = {
        id:121212124121,
        user:'Simon',
        date: new Date(),
        description:'test description',
        reactions:1,
        comments:[]
    };

    const wrapper = mount(Publication, {
        localVue,
        propsData: { item }
    });

    const title = wrapper.find('.card-title');

    expect(title.text()).toMatch(item.user);

    const description = wrapper.find('.card-text');

    expect(description.text()).toMatch(item.description);

    const date = wrapper.find('.card-subtitle');

    expect(date.text()).toMatch('hace unos segundos');

    const reactions_counter = wrapper.find('.row_footer span');

    expect(reactions_counter.text()).toMatch(`${item.reactions}`);
  })
  
})