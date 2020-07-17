// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import InstagramOutlinedSvg from '@whalue-design/icons-svg/lib/asn/InstagramOutlined';

export default {
  name: 'IconInstagramOutlined',
  displayName: 'InstagramOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: InstagramOutlinedSvg } },
      children,
    ),
};