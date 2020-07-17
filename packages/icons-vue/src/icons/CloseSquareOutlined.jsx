// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import CloseSquareOutlinedSvg from '@whalue-design/icons-svg/lib/asn/CloseSquareOutlined';

export default {
  name: 'IconCloseSquareOutlined',
  displayName: 'CloseSquareOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CloseSquareOutlinedSvg } },
      children,
    ),
};