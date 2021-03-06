// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import RestTwoToneSvg from '@whalue-design/icons-svg/lib/asn/RestTwoTone';

export default {
  name: 'IconRestTwoTone',
  displayName: 'RestTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: RestTwoToneSvg } },
      children,
    ),
};