// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import PhoneTwoToneSvg from '@whalue-design/icons-svg/lib/asn/PhoneTwoTone';

export default {
  name: 'IconPhoneTwoTone',
  displayName: 'PhoneTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: PhoneTwoToneSvg } },
      children,
    ),
};