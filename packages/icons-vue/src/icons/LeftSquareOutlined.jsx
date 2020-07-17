// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import LeftSquareOutlinedSvg from '@whalue-design/icons-svg/lib/asn/LeftSquareOutlined';

export default {
  name: 'IconLeftSquareOutlined',
  displayName: 'LeftSquareOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: LeftSquareOutlinedSvg } },
      children,
    ),
};