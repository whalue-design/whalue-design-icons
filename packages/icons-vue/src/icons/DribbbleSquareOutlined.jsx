// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import DribbbleSquareOutlinedSvg from '@whalue-design/icons-svg/lib/asn/DribbbleSquareOutlined';

export default {
  name: 'IconDribbbleSquareOutlined',
  displayName: 'DribbbleSquareOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: DribbbleSquareOutlinedSvg } },
      children,
    ),
};