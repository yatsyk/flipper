import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import Button from '../src/ui/components/Button';
import ButtonGroup from '../src/ui/components/ButtonGroup';
import Tabs from '../src/ui/components/Tabs';
import Text from '../src/ui/components/Text';
import Tab from '../src/ui/components/Tab';
import DataInspector from '../src/ui/components/data-inspector/DataInspector';
import ManagedDataInspector from '../src/ui/components/data-inspector/ManagedDataInspector';

storiesOf('Button', module)
  .add('buttons', () => (
    <div>
      <Button onClick={action('clicked')}>Default Button</Button>
      <Button onClick={action('clicked')} type="primary">
        Primary
      </Button>
      <Button onClick={action('clicked')} type="success">
        Success
      </Button>
      <Button onClick={action('clicked')} type="warning">
        Warning
      </Button>
      <Button onClick={action('clicked')} type="danger">
        Danger
      </Button>
      <Button onClick={action('clicked')} solid={true}>
        Default Solid
      </Button>
      <Button onClick={action('clicked')} type="primary" solid={true}>
        Primary Solid
      </Button>
      <Button onClick={action('clicked')} type="success" solid={true}>
        Success Solid
      </Button>
      <Button onClick={action('clicked')} type="warning" solid={true}>
        Warning Solid
      </Button>
      <Button onClick={action('clicked')} type="danger" solid={true}>
        Danger Solid
      </Button>
      <Button onClick={action('clicked')} compact={true}>
        Compact
      </Button>
      <Button onClick={action('clicked')} large={true}>
        Large
      </Button>
      <Button onClick={action('clicked')} disabled={true}>
        Disabled
      </Button>
    </div>
  ))
  .add('ButtonGroup', () => (
    <ButtonGroup>
      <Button>Default Button</Button>
      <Button type="primary">Primary</Button>
    </ButtonGroup>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf('Tabs', module).add('Tabs', () => (
  <Tabs
    newable={true}
    orderable={true}
    active="Label1"
    onActive={action('onActive')}
    onNew={action('onNew')}>
    <Tab closable={true} label="Label1">
      <Text>First Tab</Text>
    </Tab>
    <Tab label="Label2">
      <Text>Second Tab</Text>
    </Tab>
  </Tabs>
));

storiesOf('DataInspector', module).add('DataInspector', () => (
  <ManagedDataInspector data={{a: 1, b: {c: 'str', z: new Date()}}}/>
));
