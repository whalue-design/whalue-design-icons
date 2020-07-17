// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import ShareAltOutlinedSvg from '@whalue-design/icons-svg/lib/asn/ShareAltOutlined';

export default {
  name: 'IconShareAltOutlined',
  displayName: 'ShareAltOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ShareAltOutlinedSvg } },
      children,
    ),
};