// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import ContactsTwoToneSvg from '@whalue-design/icons-svg/lib/asn/ContactsTwoTone';

export default {
  name: 'IconContactsTwoTone',
  displayName: 'ContactsTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ContactsTwoToneSvg } },
      children,
    ),
};