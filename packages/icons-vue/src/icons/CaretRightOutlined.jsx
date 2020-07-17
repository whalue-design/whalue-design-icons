// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import CaretRightOutlinedSvg from '@whalue-design/icons-svg/lib/asn/CaretRightOutlined';

export default {
  name: 'IconCaretRightOutlined',
  displayName: 'CaretRightOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CaretRightOutlinedSvg } },
      children,
    ),
};