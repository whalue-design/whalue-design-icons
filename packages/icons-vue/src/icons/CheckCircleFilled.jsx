// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import CheckCircleFilledSvg from '@whalue-design/icons-svg/lib/asn/CheckCircleFilled';

export default {
  name: 'IconCheckCircleFilled',
  displayName: 'CheckCircleFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CheckCircleFilledSvg } },
      children,
    ),
};