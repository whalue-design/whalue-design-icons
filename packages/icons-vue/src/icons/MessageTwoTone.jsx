// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import MessageTwoToneSvg from '@whalue-design/icons-svg/lib/asn/MessageTwoTone';

export default {
  name: 'IconMessageTwoTone',
  displayName: 'MessageTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: MessageTwoToneSvg } },
      children,
    ),
};