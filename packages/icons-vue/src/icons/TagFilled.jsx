// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import TagFilledSvg from '@whalue-design/icons-svg/lib/asn/TagFilled';

export default {
  name: 'IconTagFilled',
  displayName: 'TagFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: TagFilledSvg } },
      children,
    ),
};