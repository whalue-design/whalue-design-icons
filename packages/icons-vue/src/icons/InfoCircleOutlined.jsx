// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import InfoCircleOutlinedSvg from '@whalue-design/icons-svg/lib/asn/InfoCircleOutlined';

export default {
  name: 'IconInfoCircleOutlined',
  displayName: 'InfoCircleOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: InfoCircleOutlinedSvg } },
      children,
    ),
};