// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import InfoCircleFilledSvg from '@whalue-design/icons-svg/lib/asn/InfoCircleFilled';

export default {
  name: 'IconInfoCircleFilled',
  displayName: 'InfoCircleFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: InfoCircleFilledSvg } },
      children,
    ),
};