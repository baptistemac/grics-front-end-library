import GButton from '.';

export default {
  title: 'Components/Grics Button',
  component: GButton,
  parameters: {
      layout: 'centered'
  },
  argTypes: {
    hierarchy: {
        control: {
            type: 'select', 
            options: ['primary', 'secondary']
        }
    },
  },
};


//--------------------------------------------------------------
// Master

const TemplateMaster = (args) => ({
  components: { GButton },
  setup() { return { args } },
  template: `<g-button v-bind='args' />`,
});

export const Master = TemplateMaster.bind({});
Master.args = {
  label: 'Button Master',
};


//--------------------------------------------------------------
// All

const TemplateAll = (args) => ({
  components: { GButton },
  setup() { return { args } },
  template: `
    <div>
        <g-button label='Primary' hierarchy='primary' v-bind='$props'/>
        <g-button label='Secondary' hierarchy='secondary' v-bind='$props'/>
    </div>
    `,
});

export const All = TemplateAll.bind({});