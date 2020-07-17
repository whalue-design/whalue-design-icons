// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import TagTwoToneSvg from '@whalue-design/icons-svg/lib/asn/TagTwoTone';

export default {
  name: 'IconTagTwoTone',
  displayName: 'TagTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: TagTwoToneSvg } },
      children,
    ),
};