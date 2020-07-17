// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import TwitterOutlinedSvg from '@whalue-design/icons-svg/lib/asn/TwitterOutlined';

export default {
  name: 'IconTwitterOutlined',
  displayName: 'TwitterOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: TwitterOutlinedSvg } },
      children,
    ),
};