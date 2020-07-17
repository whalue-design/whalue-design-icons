// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import CheckCircleOutlinedSvg from '@whalue-design/icons-svg/lib/asn/CheckCircleOutlined';

export default {
  name: 'IconCheckCircleOutlined',
  displayName: 'CheckCircleOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CheckCircleOutlinedSvg } },
      children,
    ),
};