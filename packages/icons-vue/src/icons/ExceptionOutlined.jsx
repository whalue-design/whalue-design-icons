// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import ExceptionOutlinedSvg from '@whalue-design/icons-svg/lib/asn/ExceptionOutlined';

export default {
  name: 'IconExceptionOutlined',
  displayName: 'ExceptionOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ExceptionOutlinedSvg } },
      children,
    ),
};