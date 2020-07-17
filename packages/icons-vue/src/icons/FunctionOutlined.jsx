// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import FunctionOutlinedSvg from '@whalue-design/icons-svg/lib/asn/FunctionOutlined';

export default {
  name: 'IconFunctionOutlined',
  displayName: 'FunctionOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FunctionOutlinedSvg } },
      children,
    ),
};