// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import YuqueFilledSvg from '@whalue-design/icons-svg/lib/asn/YuqueFilled';

export default {
  name: 'IconYuqueFilled',
  displayName: 'YuqueFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: YuqueFilledSvg } },
      children,
    ),
};