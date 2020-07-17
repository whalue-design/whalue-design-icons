// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import PayCircleOutlinedSvg from '@whalue-design/icons-svg/lib/asn/PayCircleOutlined';

export default {
  name: 'IconPayCircleOutlined',
  displayName: 'PayCircleOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: PayCircleOutlinedSvg } },
      children,
    ),
};