// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import AlignRightOutlinedSvg from '@whalue-design/icons-svg/lib/asn/AlignRightOutlined';

export default {
  name: 'IconAlignRightOutlined',
  displayName: 'AlignRightOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: AlignRightOutlinedSvg } },
      children,
    ),
};