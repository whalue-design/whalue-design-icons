// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import CodepenCircleFilledSvg from '@whalue-design/icons-svg/lib/asn/CodepenCircleFilled';

export default {
  name: 'IconCodepenCircleFilled',
  displayName: 'CodepenCircleFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CodepenCircleFilledSvg } },
      children,
    ),
};