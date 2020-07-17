// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import ExpandAltOutlinedSvg from '@whalue-design/icons-svg/lib/asn/ExpandAltOutlined';

export default {
  name: 'IconExpandAltOutlined',
  displayName: 'ExpandAltOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ExpandAltOutlinedSvg } },
      children,
    ),
};