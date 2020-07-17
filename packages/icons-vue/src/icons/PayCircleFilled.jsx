// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import PayCircleFilledSvg from '@whalue-design/icons-svg/lib/asn/PayCircleFilled';

export default {
  name: 'IconPayCircleFilled',
  displayName: 'PayCircleFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: PayCircleFilledSvg } },
      children,
    ),
};