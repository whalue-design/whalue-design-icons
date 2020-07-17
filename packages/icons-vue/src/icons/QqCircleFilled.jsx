// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import QqCircleFilledSvg from '@whalue-design/icons-svg/lib/asn/QqCircleFilled';

export default {
  name: 'IconQqCircleFilled',
  displayName: 'QqCircleFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: QqCircleFilledSvg } },
      children,
    ),
};