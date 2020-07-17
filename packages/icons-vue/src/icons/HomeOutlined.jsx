// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import HomeOutlinedSvg from '@whalue-design/icons-svg/lib/asn/HomeOutlined';

export default {
  name: 'IconHomeOutlined',
  displayName: 'HomeOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: HomeOutlinedSvg } },
      children,
    ),
};