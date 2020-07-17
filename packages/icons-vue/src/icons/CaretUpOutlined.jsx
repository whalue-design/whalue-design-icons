// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import CaretUpOutlinedSvg from '@whalue-design/icons-svg/lib/asn/CaretUpOutlined';

export default {
  name: 'IconCaretUpOutlined',
  displayName: 'CaretUpOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CaretUpOutlinedSvg } },
      children,
    ),
};